angular.module('liApp')
    .controller('RootController', RootController);

function RootController($scope) {
    var vm = this;
    vm.name = "rootController";

    $scope.$on('login', function(_, user) {
        $scope.currentUser = user;
    })
}