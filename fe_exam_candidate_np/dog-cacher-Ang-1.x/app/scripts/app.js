'use strict';

// Declare app level module which depends on views, and components

var myApp = angular
    .module('dogCatcherApp', [
        'ui.bootstrap',
        'oc.lazyLoad',
        'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider' ,function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
        });
        $urlRouterProvider.otherwise('/breed/notFound');

        $stateProvider
            .state('breed', {
                templateUrl: 'view/main.html',
                url: '/breed'
            })
            .state('breed.breedInfo', {
                url: '/show/:breedName',
                templateUrl: 'view/breedDetail.html',
                controller: 'breedController',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'dogCatcherApp',
                            files: [
                                'scripts/controller/mainController.js',
                                'scripts/controller/breedController.js',
                                'scripts/service/dogSearchService.js'
                            ]
                        })
                    }
                }
            })
            .state('breed.notFound', {
                templateUrl: 'view/notFound.html',
                url: '/notFound',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'dogCatcherApp',
                            files: [
                                'scripts/controller/mainController.js',
                                'scripts/controller/breedController.js',
                                'scripts/service/dogSearchService.js'
                            ]
                        })
                    }
                }
            });

    }]);