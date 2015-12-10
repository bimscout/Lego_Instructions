angular.module('liApp', []);
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
angular.module('liApp')
    .service('themeListSvc',['$http', function($http) {
        this.fetch = function() {
            return $http.get('/api/themes')
        }
    }]);
angular.module('liApp')
    .controller('RootController', RootController);

function RootController() {
    var vm = this;
    vm.name = "rootController";
}
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
    vm.navItems = [{name: "Themes", link: "/"}];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJ0aGVtZUxpc3QvdGhlbWVMaXN0LmRpcmVjdGl2ZS5qcyIsInRoZW1lTGlzdC90aGVtZUxpc3Quc2VydmljZS5qcyIsInJvb3Qvcm9vdC5jb250cm9sbGVyLmpzIiwidG9wTmF2L3RvcE5hdi5kaXJlY3RpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBQSxPQUFBLFNBQUE7QUNBQSxRQUFBLE9BQUE7S0FDQSxVQUFBLGFBQUE7O0FBRUEsU0FBQSxZQUFBO0lBQ0EsSUFBQSxZQUFBO1FBQ0EsVUFBQTtRQUNBLGFBQUE7Ozs7UUFJQSxZQUFBO1FBQ0EsY0FBQTtRQUNBLGtCQUFBOzs7SUFHQSxPQUFBOzs7QUFHQSxTQUFBLG9CQUFBLGNBQUE7SUFDQSxJQUFBLEtBQUE7SUFDQSxhQUFBO1NBQ0EsS0FBQSxVQUFBLFFBQUE7WUFDQSxHQUFBLFNBQUEsT0FBQTtXQUNBLFVBQUEsVUFBQTtZQUNBLE9BQUEsT0FBQSxTQUFBLFFBQUE7WUFDQSxPQUFBLFNBQUEsU0FBQTs7O0FDekJBLFFBQUEsT0FBQTtLQUNBLFFBQUEsZUFBQSxDQUFBLFNBQUEsU0FBQSxPQUFBO1FBQ0EsS0FBQSxRQUFBLFdBQUE7WUFDQSxPQUFBLE1BQUEsSUFBQTs7O0FDSEEsUUFBQSxPQUFBO0tBQ0EsV0FBQSxrQkFBQTs7QUFFQSxTQUFBLGlCQUFBO0lBQ0EsSUFBQSxLQUFBO0lBQ0EsR0FBQSxPQUFBOztBQ0xBLFFBQUEsT0FBQTtLQUNBLFVBQUEsVUFBQTs7QUFFQSxTQUFBLFNBQUE7SUFDQSxJQUFBLFlBQUE7UUFDQSxVQUFBO1FBQ0EsYUFBQTs7OztRQUlBLFlBQUE7UUFDQSxjQUFBO1FBQ0Esa0JBQUE7OztJQUdBLE9BQUE7OztBQUdBLFNBQUEsbUJBQUE7SUFDQSxJQUFBLEtBQUE7SUFDQSxHQUFBLFdBQUEsQ0FBQSxDQUFBLE1BQUEsVUFBQSxNQUFBO0NBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2xpQXBwJywgW10pOyIsImFuZ3VsYXIubW9kdWxlKCdsaUFwcCcpXG4gICAgLmRpcmVjdGl2ZSgndGhlbWVMaXN0JywgdGhlbWVMaXN0KTtcblxuZnVuY3Rpb24gdGhlbWVMaXN0KCkge1xuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJy90aGVtZUxpc3QuaHRtbCcsXG4gICAgICAgIC8vc2NvcGU6IHtcbiAgICAgICAgLy8gICAgbWF4OiAnPSdcbiAgICAgICAgLy99LFxuICAgICAgICBjb250cm9sbGVyOiBUaGVtZUxpc3RDb250cm9sbGVyLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd0aGVtZUxpc3QnLFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG59XG5cbmZ1bmN0aW9uIFRoZW1lTGlzdENvbnRyb2xsZXIodGhlbWVMaXN0U3ZjKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB0aGVtZUxpc3RTdmMuZmV0Y2goKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAodGhlbWVzKSB7XG4gICAgICAgICAgICB2bS50aGVtZXMgPSB0aGVtZXMuZGF0YTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAkc2NvcGUuZGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwgXCJSZXF1ZXN0IGZhaWxlZFwiO1xuICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgfSlcbn0iLCJhbmd1bGFyLm1vZHVsZSgnbGlBcHAnKVxuICAgIC5zZXJ2aWNlKCd0aGVtZUxpc3RTdmMnLFsnJGh0dHAnLCBmdW5jdGlvbigkaHR0cCkge1xuICAgICAgICB0aGlzLmZldGNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3RoZW1lcycpXG4gICAgICAgIH1cbiAgICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2xpQXBwJylcbiAgICAuY29udHJvbGxlcignUm9vdENvbnRyb2xsZXInLCBSb290Q29udHJvbGxlcik7XG5cbmZ1bmN0aW9uIFJvb3RDb250cm9sbGVyKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdm0ubmFtZSA9IFwicm9vdENvbnRyb2xsZXJcIjtcbn0iLCJhbmd1bGFyLm1vZHVsZSgnbGlBcHAnKVxuICAgIC5kaXJlY3RpdmUoJ3RvcE5hdicsIHRvcE5hdik7XG5cbmZ1bmN0aW9uIHRvcE5hdigpIHtcbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgICByZXN0cmljdDogJ0VBJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcvdG9wTmF2Lmh0bWwnLFxuICAgICAgICAvL3Njb3BlOiB7XG4gICAgICAgIC8vICAgIG1heDogJz0nXG4gICAgICAgIC8vfSxcbiAgICAgICAgY29udHJvbGxlcjogVG9wTmF2Q29udHJvbGxlcixcbiAgICAgICAgY29udHJvbGxlckFzOiAndG9wTmF2JyxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG5mdW5jdGlvbiBUb3BOYXZDb250cm9sbGVyKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdm0ubmF2SXRlbXMgPSBbe25hbWU6IFwiVGhlbWVzXCIsIGxpbms6IFwiL1wifV07XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
