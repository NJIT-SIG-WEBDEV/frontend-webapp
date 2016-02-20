angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider,$stateProvider ){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
      .state('home.list', {
        url: '/list',
        templateUrl: 'templates/home.list.html',
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
