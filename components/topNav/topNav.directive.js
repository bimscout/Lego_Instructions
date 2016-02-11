angular.module('liApp')
    .directive('topNav', topNav);

function topNav() {
    var directive = {
        restrict: 'EA',
        templateUrl: '/topNav.html',
        //scope: {
        //    max: '='
        //},
        controller: TopNavController,
        controllerAs: 'topNav',
        bindToController: true
    };

    return directive;
}

function TopNavController($state) {
    var vm = this;
    vm.navItems = [
        {name: "Themes", link: "themes"},
        {name: "Admin", link: "admin"}
/*        {name: "Register", link: "register"},
        {name: "Login", link: "login"}*/
    ];

    // exports

    vm.search = function () {

        $state.go('search', {q: vm.searchTerm}, {location: true});

//        if (vm.searchTerm) {
//            $state.go('search', {q: vm.searchTerm}, {location: true});
//        }
        vm.searchTerm = '';
    };
}