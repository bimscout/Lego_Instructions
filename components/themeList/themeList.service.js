angular.module('liApp')
    .service('themeListSvc',['$http', function($http) {
        this.fetch = function() {
            return $http.get('/api/themes')
        };

        this.update = function(theme) {
            return $http.put('/api/theme/' + theme._id, theme)
        };
    }]);