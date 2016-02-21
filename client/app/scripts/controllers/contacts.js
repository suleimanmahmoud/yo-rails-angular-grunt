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
    $scope.form = {};
    $scope.blank = {};

    $scope.loadData = function () {
      $scope.loading = true;

      $scope.contacts = Contact.query();
      $scope.contacts.$promise.then(function (result) {

        $scope.contacts = result;
        $scope.loading = false;
      });
    };

    $scope.loadData();

    $scope.options = {
      height: 150,
      toolbar: [
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['para', ['ul', 'ol']],
        ['insert', ['link','hr']]
      ]
    };

    $scope.submitForm = function(isValid) {
      console.log($scope.form);
      if (isValid) {

        Contact.save( { contact: $scope.form }, function() {

          $scope.loadData();
          $scope.form = angular.copy($scope.blank);
          $scope.contactForm.$setPristine();

        });
      }
    };

  }])

;
