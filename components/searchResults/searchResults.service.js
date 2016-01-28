angular.module('liApp')
    .service('searchResultsSvc',['$http', function($http) {
        this.fetch = function(themeid) {
            return $http.get('/api/products/' + themeid)
        }
    }]);