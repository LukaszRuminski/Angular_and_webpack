module.exports = angular.module('app.progressBar', [])

    .directive('progressBar', function () {

        return{
            restrict: 'C',
            link: function ($scope, $element) {
                $scope.$on('$viewContentLoaded', function() {
                    angular.element(window).scroll(function () {
                        $element.css('width', $element.attr('aria-valuetransitiongoal') + '%');
                    });
                });
            }
        };
    });
