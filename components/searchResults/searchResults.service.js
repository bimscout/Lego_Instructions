angular.module('liApp')
    .service('searchResultsSvc',['$http', function($http) {
        this.fetch = function(q) {
            return $http.get('/api/search?q=' + q)
        }
    }]);