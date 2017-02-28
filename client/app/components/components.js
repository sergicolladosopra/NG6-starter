import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Test from './testComponent/testComponent';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Test
])

.name;

export default componentModule;
