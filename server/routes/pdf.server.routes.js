var pdfs = require('../controllers/pdf.server.controller');

/* 
 * Test with
 *
 * curl -X POST -H "Content-Type: application/json" -d '{"url": "test.pdf", "title": "book", "author": "Guy"}' localhost:3000/pdfs
 *
 * curl -X PUT -H "Content-Type: application/json" -d '{"url": "Updated"}' localhost:3000/pdfs/570fcbd6017fd4d41417106d
 *
 *  curl -X DELETE localhost:3000/pdfs/570fcbd6017fd4d41417106d
 *
 */

module.exports = function(app) {
	app.route('/pdfs')
		.post(pdfs.create)
		.get(pdfs.list);

	app.route('/pdfs/:pdfId')
		.get(pdfs.read)
		.put(pdfs.update)
		.delete(pdfs.delete);

	app.param('pdfId', pdfs.pdfByID);	
};
