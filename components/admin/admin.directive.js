angular.module('liApp')
    .directive('admin', admin);

function admin() {
    var directive = {
        restrict: 'EA',
        templateUrl: '/admin.html',
        //scope: {
        //    max: '='
        //},
        controller: AdminController,
        controllerAs: 'admin',
        bindToController: true
    };

    return directive;
}

function AdminController() {
    var vm = this;
}