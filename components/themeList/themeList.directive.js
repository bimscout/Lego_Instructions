angular.module('liApp')
    .directive('themeList', themeList);

function themeList() {
    var directive = {
        restrict: 'EA',
        templateUrl: '/themeList.html',
        //scope: {
        //    max: '='
        //},
        controller: ThemeListController,
        controllerAs: 'themeList',
        bindToController: true
    };

    return directive;
}

function ThemeListController(themeListSvc) {
    var vm = this;
    themeListSvc.fetch()
        .then(function (themes) {
            vm.themes = themes.data;
        }, function (response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
        })
}