module.exports = angular.module("app.isotopeWidth", [])

.directive("isotopeWidth", function ($timeout) {

    return{
        restrict: "EC",
        link: function ($scope, $window) {
            $scope.$on("$stateChangeSuccess", function () {
                var container = angular.element(".isotope-width");
                if (container.length !== 0){
                    $timeout(function () {
                        var colWidth = function () {
                                var w = container[1].clientWidth,
                                    columnNum = 1,
                                    columnWidth = 0;
                                if (w > 1200) {
                                    columnNum = 5;
                                } else if (w > 900) {
                                    columnNum = 4;
                                } else if (w > 600) {
                                    columnNum = 3;
                                } else if (w > 300) {
                                    columnNum = 2;
                                }
                                columnWidth = Math.floor(w / columnNum);
                                // $timeout(function () {
                                angular.forEach(container[1].children, function (el) {
                                    var item = angular.element(el),
                                        multiplier_w = item.attr("class").match(/item-w(\d)/),
                                        multiplier_h = item.attr("class").match(/item-h(\d)/),
                                        width = multiplier_w ? columnWidth * multiplier_w[1] - 4 : columnWidth - 4,
                                        height = multiplier_h ? columnWidth * multiplier_h[1] * 0.75 - 4 : columnWidth * 0.75 - 4;
                                    item.css({
                                        width: width,
                                        height: height
                                    });
                                    return columnWidth;
                                });
                                // }, 1)
                            },
                            isotope = function () {
                                console.log(container);
                                container.isotope({
                                    resizable: false,
                                    itemSelector: ".item",
                                    masonry: {
                                        columnWidth: colWidth(),
                                        gutterWidth: 4,
                                        fitWidth: true
                                    }
                                });
                            };

                        var filterFns = {};


                        // change is-checked class on link
                        angular.element(".link-group").each(function (i, buttonGroup) {
                            var newButtonGroup = angular.element(buttonGroup);
                            newButtonGroup.on("click", "a", function () {
                                newButtonGroup.find(".checked").removeClass("checked");
                                angular.element(this).addClass("checked");
                                var filterValue = angular.element(this).attr("data-filter");
                                // use filterFn if matches value
                                filterValue = filterFns[filterValue] || filterValue;
                                container.isotope({
                                    filter: filterValue
                                });
                            });
                        });

                        isotope();
                        console.log(window)
                        angular.element(window).smartresize(isotope);
                    }, 1);
                }
            })
        }
    }
});
