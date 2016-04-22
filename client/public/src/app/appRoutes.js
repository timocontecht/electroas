//public/src/app/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page //pdf annotator
        .when('/', {
            templateUrl: 'src/app/pdfannotator/pdfannotator.tpl.html',
            controller: 'pdfannotator'
        })

        // Rmode page that will use the RmodeController
        .when('/Rmodeview', {
            templateUrl: 'src/app/RscriptMode/RmodeView.html',
			controller: 'RmodeController'
        })
    
        //if 404 redirect to home
        .otherwise({
			redirectTo: '/'
		});

    //$locationProvider.html5Mode(true);


}]);

