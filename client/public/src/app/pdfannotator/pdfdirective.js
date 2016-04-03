angular.module('eapdf', [])

.factory('PDFJS', function () {
	return PDFJS;
})

.directive('pdfAnnotator', ['PDFJS',  function(PDFJS){
	return {
		restrict: 'E',
		
		compile: function(elem, attrs, transclude) {
			'use strict';

			
			return function(scope, elem, attrs) {
			 	// create the DOM elements	
				var $pdfContainer = jQuery("<div></div>");
				elem.append($pdfContainer);
				var $canvas = jQuery("<canvas></canvas>");
				var $textLayerDiv = jQuery("<div />");
				$pdfContainer.append($canvas);
				$pdfContainer.append($textLayerDiv);

				scope.$watch(function(newVal, oldVal, scope){
					console.log($pdfContainer);
					draw($pdfContainer, $canvas, $textLayerDiv);
				}, true);
			};		

		}
	
	};

	function draw($pdfContainer, $canvas, $textLayerDiv) {
		PDFJS.getDocument('pdf/test.pdf').then(function(pdf) {
			pdf.getPage(1).then(function(page){
				var scale = 1.5;
				var viewport = page.getViewport(scale);
				
				var canvas = $canvas.get(0);
				var context = canvas.getContext("2d");
				canvas.height = viewport.height;
				canvas.width = viewport.width;
				
				$pdfContainer.css("height", canvas.height + "px").css("width", canvas.width + "px");		
				var canvasOffset = $canvas.offset();

				$textLayerDiv.addClass("textLayer")
				.css("height", canvas.height + "px")
				.css("width", canvas.width + "px")
				.offset({
						top: canvasOffset.top,
						left: canvasOffset.left
					});



				page.getTextContent().then(function (textContent){
					var factory = new DefaultTextLayerFactory();
					console.log(factory);
					var textLayer = factory.createTextLayerBuilder($textLayerDiv.get(0), 0, viewport);

					var renderContext = {
					  canvasContext: context,
					  viewport: viewport,
					};
					
					page.render(renderContext);
				 
					textLayer.setTextContent(textContent);
					textLayer.render();

				});
			});		

		});


	}
}]);
