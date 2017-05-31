module.exports =  angular.module('app.layout', ['ui.router', 'ngDialog', 'ngMap'])
    .run(['$rootScope', '$state', '$stateParams', '$timeout',  function ($rootScope,   $state,   $stateParams, $timeout) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$timeout = $timeout;
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.containerClass = toState.containerClass;
        });
    }])
    .config(['$stateProvider', '$urlRouterProvider' , function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                containerClass: "home",
                templateUrl: "../core/pages/home/home.html"
            })
            .state('about', {
                url: "/about",
                containerClass: "about",
                templateUrl: "../core/pages/about/about.html"
            })
            .state('offer', {
                url: "/offer",
                containerClass: "offer",
                templateUrl: "../core/pages/offer/offer.html"
            })
            .state('portfolio', {
                url: "/portfolio",
                containerClass: "portfolio",
                templateUrl: "../core/pages/portfolio/portfolio.html"
            })
            .state('contact', {
                url: "/contact",
                containerClass: "contact",
                templateUrl: "../core/pages/contact/contact.html"
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
    .directive('home', require('./pages/home/home'))
    .directive('about', require('./pages/about/about'))
    .directive('portfolio', require('./pages/portfolio/portfolio'))
    .directive('offer', require('./pages/offer/offer'))
    .directive('contact', require('./pages/contact/contact'));
// .directive('modalView', require('./common/prettyPhotos'));
