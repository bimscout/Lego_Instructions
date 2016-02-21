angular.module('liApp')
    .service('productListSvc',['$http', function($http) {
        this.fetch = function(themeid) {
            return $http.get('/api/products/' + themeid)
        };

        this.update = function(product) {
            return $http.put('/api/products/' + product._id, product)
        };

        this.add = function(product) {
            return $http.post('/api/products/', product)
        }

    }]);