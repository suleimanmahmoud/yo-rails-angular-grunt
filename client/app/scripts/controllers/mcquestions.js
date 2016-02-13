'use strict';

/**
 * @ngdoc function
 * @name yoRailsAngularGruntApp.controller:McquestionsCtrl
 * @description
 * # McquestionsCtrl
 * Controller of the yoRailsAngularGruntApp
 */
angular.module('yoRailsAngularGruntApp')
  .controller('McquestionsCtrl', ['$scope', 'MCQuestion', function ($scope, MCQuestion) {
    $scope.questions = MCQuestion.query();
  }]);