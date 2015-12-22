angular.module('liApp')
    .directive('login', login);

function login() {
    var directive = {
        restrict: 'EA',
        templateUrl: '/login.html',
        //scope: {
        //    max: '='
        //},
        controller: LoginController,
        controllerAs: 'login',
        bindToController: true
    };

    return directive;
}

function LoginController($scope, UserSvc) {
    var vm = this;
    $scope.login = function(username, password) {
        UserSvc.login(username, password)
            .then(function(user) {
                console.log(user)
            })
    }
}