describe('ContactController', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));


	it('name should be Bill Gates', function () {
		var $scope = {};
		$controller('ContactController', {$scope: $scope});

		expect($scope.name).toBe('Steve Jobs');
	});

	it('position should be Founder', function () {
		var $scope = {};
		$controller('ContactController', {$scope: $scope});

		expect($scope.title).toBe('Cleaner');
	});

	it('email should be bill@microsoft.com', function () {
		var $scope = {};
		$controller('ContactController', {$scope: $scope});

		expect($scope.email).toBe('tim@apple.com');
	});
});
