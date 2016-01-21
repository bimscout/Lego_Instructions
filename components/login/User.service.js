angular.module('liApp')
    .service('UserSvc',['$http', function($http) {
        var svc = this;

        svc.getUser = function() {
            return $http.get('/api/users')
        };

        svc.login = function(username, password, role) {
            return $http.post('/api/sessions', {
                username: username, password: password, role: role
            }).then(function(val) {
                svc.token = val.data;
                $http.defaults.headers.common['X-Auth'] = val.data;
                return svc.getUser()
            })
        }

    }]);