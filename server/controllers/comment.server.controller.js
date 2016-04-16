var Comment = require('mongoose').model('Comment');

exports.create = function(req, res, next)  {

	console.log(req.body);
	var comment = new Comment(req.body);

	comment.save(function(err) {
		if (err) {
			return next(err); 
		} else {
			res.json(comment);		
		}
	});
	
};

exports.list = function(req, res, next) {
	Comment.find({}, function(err, comments) {
		if (err)  {
			return next(err);
		} else {
			res.json(comments);
		}	
	});
};

exports.read = function(req, res) {
	res.json(req.comment);
};

exports.commentByID = function(req, res, next, id) {
	Comment.findOne({
		_id: id	
	}, function(err, comment) {
		if (err) {
			return next(err);
		} else {
			req.comment = comment;
			next();
		}
	});
};

exports.update = function(req, res, next) {
	Comment.findByIdAndUpdate(req.comment.id, req.body, function(err, comment) {
		if (err) {
			return next(err);
		} else {
			res.json(comment);
		}
	});
};


exports.delete = function(req, res, next) {
	req.comment.remove(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(req.comment);
		}
	});
};
