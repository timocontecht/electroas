var users = require('../controllers/users.server.controller');

/*
 * Test with
 *
 *  curl -X POST -H "Content-Type: application/json" -d '{"firstName":"First", "lastName": "last", "email":"test@test.com", "password": "pass"}' localhost:3000/users
 *
 *  curl -X PUT -H "Content-Type: application/json" -d '{"lastName": "Updated"}' localhost:3000/users/570e9c9e4c0a974c11bdb90d
 *
 *   curl -X DELETE localhost:3000/users/570e9c9e4c0a974c11bdb90d  
 *
 */


module.exports = function(app) {
	app.route('/users')
		.post(users.create)
		.get(users.list);

	app.route('/users/:userId')
		.get(users.read)
		.put(users.update)
		.delete(users.delete);

	app.param('userId', users.userByID);	
};
