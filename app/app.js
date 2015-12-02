(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/bars');
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {

    });

}(angular.module("graphic", [
    'graphic.home',
    'graphic.about',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
    'graphic.graphic'
])));
