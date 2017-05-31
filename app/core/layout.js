"use strict";
module.exports = angular.module("app.layout", ["ui.router", "ngDialog", "ngMap"])
    .run(["$rootScope", "$state", "$stateParams", "$timeout",  function ($rootScope, $sta-te, $stateParams, $timeout){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$timeout = $timeout;
        $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
            $rootScope.containerClass = toState.containerClass;
        });
    }])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider
            .state("home", {
                url: "/home",
                containerClass: "home",
                templateUrl: "../core/pages/home/home.html"
            })
            .state("about", {
                url: "/about",
                containerClass: "about",
                templateUrl: "../core/pages/about/about.html"
            })
            .state("offer", {
                url: "/offer",
                containerClass: "offer",
                templateUrl: "../core/pages/offer/offer.html"
            })
            .state("portfolio", {
                url: "/portfolio",
                containerClass: "portfolio",
                templateUrl: "../core/pages/portfolio/portfolio.html"
            })
            .state("portfolio-item", {
                url: "/portfolio-item/:itemID",
                containerClass: "portfolio-item",
                controller: "PortfolioItemStateController",
                templateUrl: "../core/pages/portfolioview/portfolioview.html"
            })
            .state("contact", {
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
    .config(["$qProvider", function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }])
    .controller("PortfolioItemStateController", ["$scope", "$stateParams", function ($scope, $stateParams) {
        $scope.id = $stateParams.itemID;
    }])
    .directive("progressBar", require("./progress/progress"))
    .directive("navigation", require("./nav/nav"))
    .directive("content", require("./content/content"))
    .directive("home", require("./pages/home/home"))
    .directive("about", require("./pages/about/about"))
    .directive("portfolio", require("./pages/portfolio/portfolio"))
    .directive("portfolioview", require("./pages/portfolioview/portfolioview"))
    .directive("offer", require("./pages/offer/offer"))
    .directive("contact", require("./pages/contact/contact"))
    .directive("responsive", require("./pages/responsive.css"));
// .directive("modalView", require("./common/prettyPhotos"));