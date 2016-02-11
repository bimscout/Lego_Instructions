angular.module('liApp')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider) {
            //$locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/themes');
            $stateProvider
                .state('themes', {
                    url: '/themes',
                    template: "<div class=\"col-md-12\" theme-list></div>"
                })
                .state('products', {
                    url: '/theme/:themeid',
                    template: "<div class=\"col-md-12\" product-list></div>"
                })
                .state('instructions', {
                    url: '/product/:productid',
                    template: "<div class=\"col-md-12\" instruction-list></div>"
                })
                .state('admin', {
                    url: '/admin',
                    template: "<div class=\"col-md-12\" admin></div>"
                })
                .state('search', {
                    url: '/searchResults?q',
                    template: "<div class=\"col-md-12\" search-results></div>"
                })
/*                .state('register', {
                    url: '/register',
                    template: "<div class=\"col-md-12\" register></div>"
                })
                .state('login', {
                    url: '/login',
                    template: "<div class=\"col-md-12\" login></div>"
                })*/
                ;
        }
    ]);