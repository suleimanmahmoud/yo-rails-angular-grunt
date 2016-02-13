'use strict';

describe('Controller: McquestionsCtrl', function () {

  // load the controller's module
  beforeEach(module('yoRailsAngularGruntApp'));

  var McquestionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    McquestionsCtrl = $controller('McquestionsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of mcquestions to the scope', function () {
    expect(McquestionsCtrl.questions.length).toBe(8);
  });
});
