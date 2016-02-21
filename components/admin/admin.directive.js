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
    vm.newTheme = {};

    vm.addTheme = function() {
        vm.activeTheme = null;
        vm.activeProduct = null;
        vm.activeInstruction = null;
        vm.addingTheme = true;
    };
    vm.updateTheme = function() {
        themeListSvc.update(theme)
            .then(function (theme) {
                angular.forEach(vm.themes, function(t, i) {
                    if (t._id === theme._id ) {
                        vm.themes[i] = theme;
                    }
                });
            }, function (response) {
                $scope.data = response.data || "Request failed";
                $scope.status = response.status;
            });
    };
    vm.saveNewTheme = function() {
        themeListSvc.add(theme)
            .then(function (theme) {
                vm.themes.unshift(theme);
                vm.activeTheme.setcount += 1;
                themeListSvc.update(vm.activeTheme);
            }, function(response) {
                $scope.data = response.data || "Request failed";
                $scope.status = response.status;
            });
        vm.activeInstruction = null;
        vm.activeTheme = theme;
        vm.addingTheme = false;
        vm.newTheme = {};
    };
    vm.cancelNewTheme = function() {
        vm.addingTheme = false;
        vm.newTheme = {};
    };



    //  Products
    vm.activeProduct = null;
    vm.addingProduct = false;
    vm.newProduct = {};

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
        vm.newProduct.themeid = vm.activeTheme._id;
        vm.activeInstruction = null;
        vm.activeProduct = null;
        vm.addingProduct = true;
    };

    vm.saveNewProduct = function(product) {
        productListSvc.add(product)
            .then(function (product) {
                vm.products.unshift(product);
                // increment the set count on the current theme, then save it.
                vm.activeTheme.setcount += 1;
                themeListSvc.update(vm.activeTheme);
            }, function(response) {
                $scope.data = response.data || "Request failed";
                $scope.status = response.status;
            });
        vm.activeInstruction = null;
        vm.activeProduct = product;
        vm.addingProduct = false;
        vm.newProduct = {};
    };
    vm.cancelNewProduct = function() {
        vm.addingProduct = false;
        vm.newProduct = {};
    };
    vm.updateProduct = function(product) {
        productListSvc.update(product)
            .then(function (product) {
                angular.forEach(vm.products, function(p, i) {
                    if (p._id === product._id ) {
                        vm.products[i] = product;
                    }
                });
            }, function (response) {
                $scope.data = response.data || "Request failed";
                $scope.status = response.status;
            });
    };
    
    

    //  Instructions
    vm.activeInstruction = null;
    vm.addingInstruction = false;
    vm.newInstruction = {};

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
        vm.newInstruction.productid = vm.activeProduct._id;
        vm.activeInstruction = instruction;
        vm.addingInstruction = true;
    };
    vm.saveNewInstruction = function(instruction) {
        instructionListSvc.add(instruction)
            .then(function (instruction) {
                vm.instructions.unshift(instruction);
            }, function(response) {
                $scope.data = response.data || "Request failed";
                $scope.status = response.status;
            });
        vm.activeInstruction = instruction;
        vm.addingInstruction = false;
        vm.newInstruction = {};
    };
    vm.cancelNewInstruction = function() {
        vm.addingInstruction = false;
        vm.newInstruction = {};
    };
    vm.updateInstruction = function() {
        instructionListSvc.update(instruction)
            .then(function (instruction) {
                angular.forEach(vm.instructions, function(ins, i) {
                    if (ins._id === instruction._id ) {
                        vm.instructions[i] = instruction;
                    }
                });
            }, function (response) {
                $scope.data = response.data || "Request failed";
                $scope.status = response.status;
            });
    };

}