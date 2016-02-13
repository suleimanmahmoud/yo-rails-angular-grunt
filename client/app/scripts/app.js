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
    'ngTouch'
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
    .when('/mcquestions', {
      templateUrl: 'views/mcquestions.html',
      controller: 'McquestionsCtrl',
      controllerAs: 'mcquestions'
    })
    .otherwise({
      redirectTo: '/'
    });
})
.factory('MCQuestion', ['$resource', function($resource) {
  return $resource('/api/mcquestions/:id.json', null, {
    'update': { method:'PUT' }
  });
}]);

