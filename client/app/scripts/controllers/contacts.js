'use strict';

/**
 * @ngdoc function
 * @name yoRailsAngularGruntApp.controller:McquestionsCtrl
 * @description
 * # ContactsCtrl
 * Controller of the yoRailsAngularGruntApp
 */
angular.module('yoRailsAngularGruntApp')
  .controller('ContactsCtrl', ['$scope', 'Contact', function ($scope, Contact) {

    $scope.loadData = function () {
      $scope.loading = true;

      $scope.contacts = Contact.query();
      $scope.contacts.$promise.then(function (result) {

        $scope.contacts = result;
        $scope.loading = false;
      });
    };

    $scope.loadData();

    $scope.submitForm = function(isValid) {
      if (isValid) {

        Contact.save( { contact: $scope.form }, function() {

          $scope.loadData();

        });
      }
    };

  }])

;
