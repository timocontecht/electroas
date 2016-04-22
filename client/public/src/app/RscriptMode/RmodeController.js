//public/src/app/RscriptMode/RmodeController.js
angular.module('RmodeCtrl', ['ui.ace']).controller('RmodeController', function($scope) {
        // The ACE modes
    $scope.modes = ['R', 'JSON', 'Latex' ]; //multimple modes can be selected. 
    $scope.mode = $scope.modes[0];
    
        //changing the themes for script area view
    $scope.themes = ['eclipse']; //multiple themes can be added and a theme selector can be created
    $scope.theme = $scope.themes[0];

    
      // The ui-ace option. Currently we will use only R mode. 
    $scope.aceOption = {
        mode: $scope.mode.toLowerCase(),
        theme: $scope.theme.toLowerCase(),
        onLoad: function (_ace) {

            // HACK to have the ace instance in the scope...
        $scope.modeChanged = function () {
            _ace.getSession().setMode("ace/mode/" + $scope.mode.toLowerCase());
            };
        }
    };


      // Initial code content. To develop the reading of R files. 
    $scope.aceModel = '# R code in here.\n' +
        ' <- commandArgs(TRUE) \n N <- args[1] \n x <- rnorm(N,0,1) \n png(filename="Rtemp.png", width=500, height=500) \n hist(x, col="lightblue") \n dev.off()\n\n\n' +
         '{"employees":[ \n {"firstName":"John", "lastName":"Doe"}, \n{"firstName":"Anna", "lastName":"Smith"}, \n{"firstName":"Peter", "lastName":"Jones"} \n]} \n\n\n' ;

});