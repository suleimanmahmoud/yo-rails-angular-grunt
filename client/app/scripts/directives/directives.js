/**
 * Created by suleiman on 2/21/16.
 */
'use strict';

angular.module('yoRailsAngularGruntApp')
// from http://stackoverflow.com/questions/30389006/in-angularjs-how-to-set-focus-on-input-on-form-submit-if-input-has-error
.directive('accessibleForm', function () {
  return {
    restrict: 'A',
    link: function (scope, elem) {

      // set up event handler on the form element
      elem.on('submit', function () {

        // find the first invalid element
        var firstInvalid = elem[0].querySelector('.ng-invalid');

        // if we find one, set focus
        if (firstInvalid) {
          firstInvalid.focus();
        }
      });
    }
  };
});
