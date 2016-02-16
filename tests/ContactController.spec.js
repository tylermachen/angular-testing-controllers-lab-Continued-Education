describe('ContactController', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));


	it('should have a name property set to "Bill Gates"', function () {
		var $scope = {};
		$controller('ContactController', {$scope: $scope});

		expect($scope.name).toBe('Steve Jobs');
	});

	it('should have a title set to "Founder"', function () {
		var $scope = {};
		$controller('ContactController', {$scope: $scope});

		expect($scope.title).toBe('Cleaner');
	});

	it('should have an email set to "bill@microsoft.com"', function () {
		var $scope = {};
		$controller('ContactController', {$scope: $scope});

		expect($scope.email).toBe('tim@apple.com');
	});
});
