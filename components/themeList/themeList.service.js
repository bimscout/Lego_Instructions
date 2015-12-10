angular.module('liApp')
    .service('themeListSvc',['$http', function($http) {
        this.fetch = function() {
            return $http.get('/api/themes')
        }
    }]);