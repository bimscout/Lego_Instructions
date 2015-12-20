angular.module('liApp')
    .directive('instructionList', instructionList);

function instructionList() {
    var directive = {
        restrict: 'EA',
        templateUrl: '/instructionList.html',
        //scope: {
        //    max: '='
        //},
        controller: InstructionListController,
        controllerAs: 'instructionList',
        bindToController: true
    };

    return directive;
}

function InstructionListController(instructionListSvc, $stateParams) {
    var vm = this;
    instructionListSvc.fetch($stateParams.productid)
        .then(function (instructions) {
            vm.instructions = instructions.data;
        }, function (response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
        })
}