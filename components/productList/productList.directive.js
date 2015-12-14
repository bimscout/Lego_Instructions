angular.module('liApp')
    .directive('productList', productList);

function productList() {
    var directive = {
        restrict: 'EA',
        templateUrl: '/productList.html',
        //scope: {
        //    max: '='
        //},
        controller: ProductListController,
        controllerAs: 'productList',
        bindToController: true
    };

    return directive;
}

function ProductListController(productListSvc, $stateParams) {
    var vm = this;
    productListSvc.fetch($stateParams.themeid)
        .then(function (products) {
            vm.products = products.data;
        }, function (response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
        })
}