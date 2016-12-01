var app = angular.module('app', ['ui.router'])


  app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider,$stateProvider ){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'shared/home/templates/home.html',
      controller: 'homeCtrl'
    })
      .state('home.list', {
        url: '/list',
        templateUrl: 'shared/home/templates/home.list.html',
      })
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      views: {
        "jumbotron": {templateUrl: 'templates/jumbotron.html'},
        "links": {templateUrl: 'templates/about.html'}
      },
    controller: 'aboutCtrl'
    })
  }])
