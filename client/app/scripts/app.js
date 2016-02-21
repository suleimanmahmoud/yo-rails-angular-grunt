'use strict';

/**
 * @ngdoc overview
 * @name yoRailsAngularGruntApp
 * @description
 * # yoRailsAngularGruntApp
 *
 * Main module of the application.
 */
angular
  .module('yoRailsAngularGruntApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'summernote'
  ])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactsCtrl',
      controllerAs: 'contact'
    })
    .otherwise({
      redirectTo: '/'
    });
})
;

