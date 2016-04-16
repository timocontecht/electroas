var comments = require('../controllers/comment.server.controller');
/*
 * Test with
 * curl -X POST -H "Content-Type: application/json" -d '{"postedBy": "570fb493368cd8fc23843396", "inpdf": "5711d44b3542367c1b73a2f0", "page": "3", "startLine" :  "5", "endLine" : "9", "comment" : "This is crap", "type": "Comment"}' localhost:3000/comments
 *
 * curl -X PUT -H "Content-Type: application/json" -d '{"startLine": "6"}' localhost:3000/comments/5711d4ac3542367c1b73a2f1
 * 
 * curl -X DELETE localhost:3000/comments/5711d4ac3542367c1b73a2f1
*/

module.exports = function(app) {
	app.route('/comments')
		.post(comments.create)
		.get(comments.list);

	app.route('/comments/:commentId')
		.get(comments.read)
		.put(comments.update)
		.delete(comments.delete);

	app.param('commentId', comments.commentByID);	
};
