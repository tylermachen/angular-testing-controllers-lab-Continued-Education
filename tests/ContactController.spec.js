describe('ContactController', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));


	it('name should be Bill Gates', function () {
		var $scope = {};
		$controller('ContactController', {$scope: $scope});

		expect($scope.name).toBe('Bill Gates');
	});

	it('position should be a Founder', function () {
		var $scope = {};
		$controller('ContactController', {$scope: $scope});

		expect($scope.title).toBe('Founder');
	});

	it('email should be bill@microsoft.com', function () {
		var $scope = {};
		$controller('ContactController', {$scope: $scope});

		expect($scope.email).toBe('bill@microsoft.com');
	});
});
