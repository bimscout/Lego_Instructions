angular.module('liApp')
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/themes');
            $stateProvider
/*                .state('root', {
                    url: '/',
                    views: {
                        'content@root': { template: '<div class="col-md-12" theme-list></div>'}
                    }
                })*/
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
                });
        }
    ]);