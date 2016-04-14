var pdfs = require('../controllers/pdf.server.controller');

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
