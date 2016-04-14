var Pdf = require('mongoose').model('pdf');

exports.create = function(req, res, next)  {

	console.log(req.body);
	var pdf = new Pdf(req.body);

	pdf.save(function(err) {
		if (err) {
			return next(err); 
		} else {
			res.json(pdf);		
		}
	});
	
};

exports.list = function(req, res, next) {
	Pdf.find({}, function(err, pdfs) {
		if (err)  {
			return next(err);
		} else {
			res.json(pdfs);
		}	
	});
};

exports.read = function(req, res) {
	res.json(req.pdf);
};

exports.pdfByID = function(req, res, next, id) {
	Pdf.findOne({
		_id: id	
	}, function(err, pdf) {
		if (err) {
			return next(err);
		} else {
			req.pdf = pdf;
			next();
		}
	});
};

exports.update = function(req, res, next) {
	Pdf.findByIdAndUpdate(req.pdf.id, req.body, function(err, pdf) {
		if (err) {
			return next(err);
		} else {
			res.json(pdf);
		}
	});
};


exports.delete = function(req, res, next) {
	req.pdf.remove(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(req.pdf);
		}
	});
};
