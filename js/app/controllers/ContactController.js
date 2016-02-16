function ContactController($scope) {
	$scope.name = 'Bill Gates';
	$scope.title = 'Founder';
	$scope.email = 'bill@microsoft.com';
}

angular
	.module('app')
	.controller('ContactController', ContactController);