var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService){
	
	$scope.users = mainService.getUsers();
	
	
});