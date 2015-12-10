angular.module('liApp')
    .controller('RootController', RootController);

function RootController() {
    var vm = this;
    vm.name = "rootController";
}