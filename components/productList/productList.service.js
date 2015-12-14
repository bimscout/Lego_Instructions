angular.module('liApp')
    .service('productListSvc',['$http', function($http) {
        this.fetch = function(themeid) {
            return $http.get('/api/products/' + themeid)
        }
    }]);