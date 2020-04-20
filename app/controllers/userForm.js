function UserFormCtrl($scope, $window) {
    $scope.master = {}
    $scope.form = {}
    this.submit = false
    var users = []
    if ($window.localStorage.getItem("users")) users = JSON.parse($window.localStorage.getItem("users"))

    $scope.submitUserForm = function (user) {
        this.submit = true
        $scope.master = angular.copy(user);
        users.push($scope.master)
        $window.localStorage.setItem("users", JSON.stringify(users))
        // $scope.cleanUserForm()
    }
    $scope.cleanUserForm = function (form) {
        if (form) {
            form.$setPristine();
            form.$setUntouched();
        }
        $scope.user = angular.copy($scope.master)
    }
}
angular.module('iLogTechApp')
    .component('userFormCtrl', {
        templateUrl: 'views/userForm.html',
        controller: UserFormCtrl
    });