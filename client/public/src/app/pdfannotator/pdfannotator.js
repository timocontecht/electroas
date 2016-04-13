angular.module('electroAs').controller('pdfannotator',  function($scope){
	$scope.tester = 'Tester';
	$scope.selection = {};

	$scope.pageForward = function() {
		if ($scope.page + 1 <= $scope.numberOfPages)
			$scope.page++;
	}; 
	
	$scope.pageBack = function() {
		if ($scope.page - 1 >= 1)
			$scope.page--;
	}; 
	
	$scope.$watch('selection', function() {
		console.log('Start annotating for');
		console.log($scope.selection);
	});
});

