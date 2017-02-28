import angular from 'angular';
import uiRouter from 'angular-ui-router';
import testComponentComponent from './testComponent.component';
import testService from './testComponent.service';

let testComponentModule = angular.module('testComponent', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('test', {
      url: '/test',
      component: 'test'
    });
})
.component('test', testComponentComponent)
.service('testService', testService)
.name;

export default testComponentModule;
