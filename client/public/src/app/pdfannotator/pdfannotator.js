angular.module('electroAs').controller('pdfannotator',  function($scope){
	$scope.tester = 'Tester';
	$scope.selection = {};

	$scope.$watch('selection', function() {
		console.log('Start annotating for');
		console.log($scope.selection);
	});
});

