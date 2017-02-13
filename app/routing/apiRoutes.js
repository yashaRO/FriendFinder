var friendsList = require('../data/friends')

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friendsList)
	})
	
	app.post('/api/friends', function(req, res) {
		
		friendsList.push({
			'name': req.body.name,
			'photo': req.body.photo,
			'scores': [
				parseInt(req.body.question1),
				parseInt(req.body.question2),
				parseInt(req.body.question3),
				parseInt(req.body.question4),
				parseInt(req.body.question5),
				parseInt(req.body.question6),
				parseInt(req.body.question7),
				parseInt(req.body.question8),
				parseInt(req.body.question9),
				parseInt(req.body.question10)
			]
		})
		
		res.json(friendsList)
	})
}