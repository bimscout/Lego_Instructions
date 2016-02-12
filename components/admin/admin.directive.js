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

function AdminController(themeListSvc, productListSvc, instructionListSvc) {
    var vm = this;
    themeListSvc.fetch()
        .then(function (themes) {
            vm.themes = themes.data;
        }, function (response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
        });

    //  Themes
    vm.activeTheme = null;
    vm.addingTheme = false;

    vm.addTheme = function() {
        vm.activeTheme = null;
        vm.activeProduct = null;
        vm.activeInstruction = null;
        vm.addingTheme = true;
    };
    vm.updateTheme = function() {

    };
    vm.saveNewTheme = function() {

    };
    vm.cancelNewTheme = function() {
        vm.addingTheme = false;
    };

    //  Products
    vm.activeProduct = null;
    vm.addingProduct = false;

    vm.fetchProducts = function(theme) {
        productListSvc.fetch(theme._id)
            .then(function (products) {
                vm.products = products.data;
            }, function (response) {
                $scope.data = response.data || "Request failed";
                $scope.status = response.status;
            });
        vm.activeTheme = theme;
        vm.activeProduct = null;
        vm.activeInstruction = null;
    };
    vm.addProduct = function() {
        vm.activeInstruction = null;
        vm.activeProduct = null;
        vm.addingProduct = true;
    };
    vm.saveNewProduct = function() {

    };
    vm.cancelNewProduct = function() {
        vm.addingProduct = false;
    };
    vm.updateProduct = function() {

    };

    //  Instructions
    vm.activeInstruction = null;
    vm.addingInstruction = false;

    vm.fetchInstructions = function(product) {
        instructionListSvc.fetch(product._id)
            .then(function (instructions) {
                vm.instructions = instructions.data;
            }, function (response) {
                $scope.data = response.data || "Request failed";
                $scope.status = response.status;
            });
        vm.activeProduct = product;
        vm.activeInstruction = null;
    };
    vm.addInstruction = function() {
        vm.activeInstruction = null;
        vm.addingInstruction = true;
    };
    vm.saveNewInstruction = function() {

    };
    vm.cancelNewInstruction = function() {
        vm.addingInstruction = false;
    };
    vm.updateInstruction = function() {

    };

}