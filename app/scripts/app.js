'use strict';

/**
 * @ngdoc overview
 * @name horoscopeApp
 * @description
 * # horoscopeApp
 *
 * Main module of the application.
 */
angular
  .module('horoscopeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/horoscope', {
        templateUrl: 'views/horoscope.html',
        controller: 'HoroscopeCtrl',
        controllerAs: 'horoscope'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
