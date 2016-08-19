module.exports = angular.module('app.viewModal', ['ngDialog'])
    .config(['ngDialogProvider', function (ngDialogProvider) {
        ngDialogProvider.setDefaults({
            className: 'ngdialog-theme-default',
            plain: false,
            showClose: true,
            closeByDocument: true,
            closeByEscape: true,
            appendTo: false,
            preCloseCallback: function () {
                console.log('default pre-close callback');
            }
        });
    }])
    .controller('ViewModalCtrl', ['$scope', '$rootScope', 'ngDialog', function ($scope, $rootScope, ngDialog) {

        $scope.openTemplate = function () {
            $scope.value = true;

            ngDialog.open({
                template: "../core/common/modalPortfolioTemplate.html",
                className: 'ngdialog-theme-plain',
                scope: $scope
            });
        };
    }]);