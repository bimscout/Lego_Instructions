angular.module('liApp')
    .service('themeListSvc',['$http', function($http) {
        this.fetch = function() {
            return $http.get('/api/themes')
        };

        this.update = function(theme) {
            return $http.put('/api/themes/' + theme._id, theme)
        };

        this.add = function(theme) {
            return $http.post('/api/themes/', theme)
        }
    }]);