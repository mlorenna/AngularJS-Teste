function CourseFormCtrl($scope, $window) {
    $scope.master = {}
    $scope.users = JSON.parse($window.localStorage.getItem("users"))
    this.submit = false
    var courses = []
    if ($window.localStorage.getItem("courses")) courses = JSON.parse($window.localStorage.getItem("courses"))

    $scope.submitCourseForm = function (course) {
        this.submit = true
        $scope.master = angular.copy(course);
        courses.push($scope.master)
        $window.localStorage.setItem('courses', JSON.stringify(courses))
    }
    $scope.cleanCourseForm = function (form) {
        if (form) {
            form.$setPristine();
            form.$setUntouched();
        }
        $scope.course = angular.copy($scope.master)
    }
    $scope.cleanCourseForm()
}
angular.module('iLogTechApp')
    .component('courseFormCtrl', {
        templateUrl: 'views/courseForm.html',
        controller: CourseFormCtrl
    });