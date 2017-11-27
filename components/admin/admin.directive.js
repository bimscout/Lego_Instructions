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
    vm.newTheme = {"setcount": 0};

    vm.addTheme = function() {
        vm.activeTheme = null;
        vm.activeProduct = null;
        vm.activeInstruction = null;
        vm.addingTheme = true;
    };
    vm.updateTheme = function() {
        themeListSvc.update(theme)
            .then(function (response) {
                angular.forEach(vm.themes, function(t, i) {
                    if (t._id === response.data._id ) {
                        vm.themes[i] = response.data;
                    }
                });
            }, function (response) {
                $scope.data = response.data || "Request failed";
                $scope.status = response.status;
            });
    };
    vm.saveNewTheme = function(theme) {
        themeListSvc.add(theme)
            .then(function (response) {
                vm.themes.unshift(response.data);
                vm.activeTheme = response.data;
                vm.addingTheme = false;
                vm.newTheme = {"setcount": 0};
                vm.activeInstruction = null;
                vm.activeProduct = null;
            }, function(response) {
                $scope.data = response.data || "Request failed";
                $scope.status = response.status;
            });


    };
    vm.cancelNewTheme = function() {
        vm.addingTheme = false;
        vm.newTheme = {"setcount": 0};
    };



    //  Products
    vm.activeProduct = null;
    vm.addingProduct = false;
    vm.newProduct = {};

    vm.fetchProducts = function(theme) {
        productListSvc.fetch(theme._id)
            .then(function (products) {
                vm.products = products.data;
                vm.instructions = null;
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
            .then(function (response) {
                vm.products.unshift(response.data);
                // increment the set count on the current theme, then save it.
                vm.activeTheme.setcount += 1;
                vm.activeInstruction = null;
                vm.activeProduct = response.data;
                vm.addingProduct = false;
                vm.newProduct = {};
                themeListSvc.update(vm.activeTheme);
            }, function(response) {
                $scope.data = response.data || "Request failed";
                $scope.status = response.status;
            });
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
    vm.editInstruction = function(instruction) {
        vm.activeInstruction = instruction;
    };
    vm.addInstruction = function() {
        vm.newInstruction.productid = vm.activeProduct._id;
        vm.activeInstruction = null;
        vm.addingInstruction = true;
    };
    vm.saveNewInstruction = function(instruction) {
        instructionListSvc.add(instruction)
            .then(function (response) {
                vm.instructions.push(response.data);
                vm.activeInstruction = response.data;
                vm.addingInstruction = false;
                vm.newInstruction = {"productid": vm.activeProduct._id};
            }, function(response) {
                $scope.data = response.data || "Request failed";
                $scope.status = response.status;
            });
    };
    vm.cancelNewInstruction = function() {
        vm.addingInstruction = false;
        vm.newInstruction = {"productid": vm.activeProduct._id};
    };
    vm.updateInstruction = function(instruction) {
        instructionListSvc.update(instruction)
            .then(function (response) {
                angular.forEach(vm.instructions, function(ins, i) {
                    if (ins._id === response.data._id ) {
                        vm.instructions[i] = response.data;
                    }
                });
            }, function (response) {
                $scope.data = response.data || "Request failed";
                $scope.status = response.status;
            });
    };

}