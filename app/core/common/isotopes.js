module.exports = angular.module('app.isotopes', [])

.directive('isotopes', function () {

    return {
        restrict: 'C',
        link: function ($scope, element) {
            $scope.$on('$viewContentLoaded', function() {
                var container = element.isotope({
                    itemSelector: '.item',
                    layoutMode: 'fitRows'
                });
                var filterFns = {};

                // bind filter a click
                angular.element('.link-group').each(function (i, buttonGroup) {
                    var newButtonGroup = angular.element(buttonGroup);
                    newButtonGroup.on('click', 'a', function () {
                        newButtonGroup.find('.checked').removeClass('checked');
                        angular.element(this).addClass('checked');
                        var filterValue = angular.element(this).attr('data-filter');
                        // use filterFn if matches value
                        filterValue = filterFns[filterValue] || filterValue;
                        container.isotope({
                            filter: filterValue
                        });
                    });
                });

            })
        }
    }
})