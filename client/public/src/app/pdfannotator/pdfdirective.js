angular.module('eapdf', [])

.factory('PDFJS', function () {
	return PDFJS;
})

.directive('pdfAnnotator', ['PDFJS',  function(PDFJS){

	var test = 'Timo';


	return {
		restrict: 'E',
		
		compile: function(elem, attrs, transclude) {
			'use strict';

			return function(scope, elem, attrs) {

				PDFJS.getDocument('pdf/test.pdf').then(function(pdf){
					scope.$watch('page', function(page) {
							draw(pdf, elem, page, scope);
					}, true);

					// draw the first page
					scope.page = 1;
					scope.numberOfPages = pdf.numPages; 
					scope.$apply();
					
				});
			};		

		}
	
	};


	function draw(pdf, elem, page, scope){
		var selection = {}; 
		// the mouse handlers for selection
		var startSelection = function(e) {
				scope.selection.start = e.srcElement.attributes.line.value;
			};

		var addComment = function(e) {
				scope.selection.end =  e.srcElement.attributes.line.value;
				console.log(e);
				scope.selection.text = "";
				for (var selEl = scope.selection.start; selEl <= scope.selection.end; selEl++) {
					scope.selection.text += e.srcElement.offsetParent.children[selEl].outerText;
					scope.selection.text += " ";
				} 
				scope.$apply();
			};


			pdf.getPage(scope.page).then(function(page){
				console.log(elem);
				if (elem[0].childElementCount > 0)
					elem[0].removeChild(elem[0].firstChild);
				// create the DOM elements	
				var $pdfContainer = jQuery("<div></div>");
				elem.append($pdfContainer);
				var $canvas = jQuery("<canvas></canvas>");
				var $textLayerDiv = jQuery("<div />");
				$pdfContainer.append($canvas);
				$pdfContainer.append($textLayerDiv);
				
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
					console.log($textLayerDiv);
					//remove all children 
					//
					//while($textLayerDiv[0].firstChild) {
					//	$textLayerDiv[0].removeChild($textLayerDiv[0].firstChild);
					//}
					
					var textLayer = factory.createTextLayerBuilder($textLayerDiv.get(0), 0, viewport);

					var renderContext = {
					  canvasContext: context,
					  viewport: viewport,
					};
					
					page.render(renderContext);
				 
					textLayer.setTextContent(textContent);
					textLayer.render(10);
					
					// prepare elements for selection
					for (var i=0; i<textLayer.textDivs.length; i++) {
						var div = textLayer.textDivs[i];
						var lin_attr = document.createAttribute("line");
						lin_attr.value = i;
						div.setAttributeNode(lin_attr);
						div.addEventListener('mousedown', startSelection);
						div.addEventListener('mouseup', addComment);
					}

				});
			});		


	
	}
	

	
}]);
