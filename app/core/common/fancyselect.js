module.exports = angular.module('app.fancySelect', [])

.directive('fancySelect', function () {

    return{
        restrict: 'C',
        link: function ($scope, $element) {
            $scope.$on('$viewContentLoaded', function() {
                angular.element('#filters').fancySelect();
            })
        }
    };
});