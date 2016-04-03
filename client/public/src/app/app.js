var electroAs = angular.module('electroAs', ['ngRoute', 'eapdf']);


angular.module('electroAs').config(function($routeProvider) {
	$routeProvider
		.when('/',  {
			templateUrl: 'src/app/pdfannotator/pdfannotator.tpl.html',
			controller: 'pdfannotator'	
		})
		.otherwise({
			redirectTo: '/'
		});

});
