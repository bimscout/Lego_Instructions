angular.module('liApp')
    .directive('register', register);

function register() {
    var directive = {
        restrict: 'EA',
        templateUrl: '/register.html',
        //scope: {
        //    max: '='
        //},
        controller: RegisterController,
        controllerAs: 'register',
        bindToController: true
    };

    return directive;
}

function RegisterController() {
    var vm = this;
}