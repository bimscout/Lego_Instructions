angular.module('liApp')
    .service('instructionListSvc',['$http', function($http) {
        this.fetch = function(productid) {
            return $http.get('/api/instructions/' + productid)
        }
    }]);