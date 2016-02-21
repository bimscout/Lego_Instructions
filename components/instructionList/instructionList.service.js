angular.module('liApp')
    .service('instructionListSvc',['$http', function($http) {
        this.fetch = function(productid) {
            return $http.get('/api/instructions/' + productid)
        };

        this.update = function(instruction) {
            return $http.put('/api/instruction/' + instruction._id, instruction)
        };

        this.add = function(instruction) {
            return $http.post('/api/instructions/', instruction)
        }

    }]);