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

function TopNavController() {
    var vm = this;
    vm.navItems = [
        {name: "Themes", link: "themes"},
        {name: "Admin", link: "admin"}
    ];
}