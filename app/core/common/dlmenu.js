module.exports = angular.module('app.dlMenu', [])

.directive('dlMenuwrapper', function () {

    return{
        restrict: 'C',
        link: function ($scope, $element) {
            // $scope.$on('$viewContentLoaded', function () {
                $element.dlmenu();
            // })
        }
    };
});