module.exports = angular.module("app.googleMaps", [])

    .directive("googleMaps", function () {

        return{
            restrict: "C",
            link: function ($scope, $element) {
                $scope.$on("$viewContentLoaded", function() {
                    var latlng = new google.maps.LatLng(48.886674, 2.342083);
                    var styles = [

                    ];

                    var myOptions = {
                        zoom: 17,
                        center: latlng,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        disableDefaultUI: true,
                        scrollwheel: false,
                        styles: styles
                    };

                    var contentString = "<div id="content">" +
                        "<div id="siteNotice">" +
                        "</div>" +
                        "<h4>We Are Here</h4>" +
                        "<p>Description" +
                        "</p>" +
                        "</div>";

                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });

                    var map = new google.maps.Map($element, myOptions);

                    var myLatlng = new google.maps.LatLng(48.886674, 2.342075);

                    var image = "images/marker.png";
                    var marker = new google.maps.Marker({
                        position: myLatlng,
                        map: map,
                        title: "Hello World!",
                        icon: image
                    });

                    google.maps.event.addListener(marker, "click", function () {
                        infowindow.open(map, marker);
                    });
                });

            }
        };
    });