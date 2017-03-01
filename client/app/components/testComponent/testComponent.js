import angular from 'angular';
import uiRouter from 'angular-ui-router';
import testComponentComponent from './testComponent.component';
import testService from './testComponent.service';
import urls from './testComponent.urls';

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
.service('urls', urls)
.name;

export default testComponentModule;
