'use strict';
var myApp = angular.module('iLogTechApp', ['ui.router'])
myApp.config(function ($stateProvider) {
    var states = [
        {
            name: 'Dashboard',
            url: '/dashboard',
            component: 'dashboard'
        },

        {
            name: 'UserForm',
            url: '/user-form',
            component: 'userFormCtrl'
        },

        {
            name: 'CourseForm',
            url: '/course-form',
            component: 'courseFormCtrl'
        }

    ]

    states.forEach(function (state) {
        $stateProvider.state(state)
    })

})