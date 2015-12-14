angular.module('liApp')
    .directive('productDetail', productDetail);

function productDetail() {
    var directive = {
        restrict: 'EA',
        templateUrl: '/productDetail.html',
        //scope: {
        //    max: '='
        //},
        controller: ProductDetailController,
        controllerAs: 'productDetail',
        bindToController: true
    };

    return directive;
}

function ProductDetailController() {
    var vm = this;
}