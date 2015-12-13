angular.module('liApp')
.config(function($routeProvider) {
        $routeProvider
            .when('/', { controller: 'themeListController', controllerAs: 'themeList', template: '<div class="col-md-12" theme-list></div>'})
            .when('/register', { controller: 'registerController', templateUrl: 'register.html'})
            .when('/login', { controller: 'loginController', templateUrl: 'login.html'})
    });