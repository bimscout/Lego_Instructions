angular.module('liApp')
    .directive('searchResults', searchResults);

function searchResults() {
    var directive = {
        restrict: 'EA',
        templateUrl: '/searchResults.html',
        //scope: {
        //    max: '='
        //},
        controller: SearchResultsController,
        controllerAs: 'searchResults',
        bindToController: true
    };

    return directive;
}

function SearchResultsController(searchResultsSvc, $stateParams) {
    var vm = this;
    searchResultsSvc.fetch($stateParams.q)
        .then(function (products) {
            vm.products = products.data;
        }, function (response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
        })
}