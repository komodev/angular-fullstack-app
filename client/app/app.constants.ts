'use strict';
const angular = require('angular');

export default angular.module('angularFullstackAppApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
