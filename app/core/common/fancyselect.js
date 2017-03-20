module.exports = angular.module('app.fancySelect', [])

    .directive('fancySelect', function () {

        return {
            restrict: 'C',
            link: function ($scope) {
                $scope.$on('$viewContentLoaded', function () {
                    angular.element('#filters').fancySelect();
                    // $timeout(function () {
                    //     var heightValue = $element.height();
                    //     $element.css('height', heightValue);
                    //     console.log($element.height());
                    // })
                });
            }
        };
});