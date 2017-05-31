module.exports = angular.module("app.progressBar", [])

    .directive("progressBar", function () {

        return{
            restrict: "C",
            link: function ($scope, $element) {
                angular.element(window).scroll(function (event) {
                    $element.css("width", $element.attr("aria-valuetransitiongoal") + "%");
                });
            }
        }
    });
