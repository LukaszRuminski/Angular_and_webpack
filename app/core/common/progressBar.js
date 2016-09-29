module.exports = angular.module('app.progressBar', [])

    .directive('progressBar', function () {

        return{
            restrict: 'C',
            link: function ($scope, $element) {
                $scope.$on('$viewContentLoaded', function() {
                    angular.element(window).ready(function (e) {
                        $element.css('width', jQuery(this).attr('aria-valuetransitiongoal') + '%');
                    });
                })
            }
        }
    });
