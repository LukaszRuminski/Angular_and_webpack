module.exports =  angular.module('app.layout', ['ui.router', 'ngDialog'])
    .run(['$rootScope', '$state', '$stateParams', '$timeout',  function ($rootScope,   $state,   $stateParams, $timeout) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                $rootScope.$timeout = $timeout;
            }
        ]
    )
    .config(['$stateProvider', '$urlRouterProvider' , function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "../core/pages/home.html"
            })
            .state('about', {
                url: "/about",
                templateUrl: "../core/pages/about.html"
            })
            .state('portfolio', {
                url: "/portfolio",
                templateUrl: "../core/pages/portfolio/portfolio.html"
            });
    }])
    .config(["ngDialogProvider", function (ngDialogProvider) {
        ngDialogProvider.setDefaults({
            className: "ngdialog-theme-default",
            plain: false,
            showClose: true,
            closeByDocument: true,
            closeByEscape: true,
            appendTo: false,
            preCloseCallback: function () {
                console.log("default pre-close callback");
            }
        });
    }])
.directive('progressBar', require('./progress/progress'))
    .directive('navigation', require('./nav/nav'))
    .directive('content', require('./content/content'))
    .directive('portfolio', require('./pages/portfolio/portfolio'));
// .directive('modalView', require('./common/prettyPhotos'));
