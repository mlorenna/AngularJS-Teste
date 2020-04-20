function DashboardApp($scope, $window) {
    $scope.master = {}
    $scope.courses = JSON.parse($window.localStorage.getItem("courses"))
    $scope.users = JSON.parse($window.localStorage.getItem("users"))
    $scope.selectCourse = ''

    $scope.openTable = function (index) {
        $scope.selectCourse = $scope.courses[index]
        $scope.selectCourseUsers = []
        for (let index = 0; index < $scope.selectCourse.users.length; index++) {
            $scope.selectCourseUsers.push(JSON.parse($scope.selectCourse.users[index]))

        }
    }

    $scope.deleteUserFromCourse = function (index) {
        $scope.selectCourseUsers.splice(index, 1)
    }

}
angular.module('iLogTechApp')
    .component('dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: DashboardApp
    });