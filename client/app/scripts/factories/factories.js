/**
 * Created by suleiman on 2/21/16.
 */
'use strict';

angular.module('yoRailsAngularGruntApp')
  .factory('Contact', ['$resource', function($resource) {
    return $resource('/api/contacts/:id.json', null, {
      'update': { method:'PUT' }
    });
  }])
;
