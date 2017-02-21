var friendsList = require('../data/friends')

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friendsList)
	})
	
	app.post('/api/friends', function(req, res) {
		
		scores = [
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
			];
		friendsList.push({
			'name': req.body.name,
			'photo': req.body.photo,
			'scores': scores
		})
		
		function friendFinder(curr,list) {
			
			tmpArr = []
			for(let i = 0; i < list.length; i++) {
				
				totalDiff = 0
				
				for(let j = 0; j < list[i].scores.length; j++) {
					
					totalDiff += Math.abs(curr[j] - list[i].scores[j])
					
				}
					tmpArr.push({
						name:list[i].name,
						photo:list[i].photo,
						difference: totalDiff
					})
			}							
			tmpArr.sort((a,b) => a.difference - b.difference)
			return tmpArr[1];
		}
		match = friendFinder(scores,friendsList)
    //I'd do a whole page and modal, but like, they came on this page for harambe, so they don't need an introduction.
    
		res.redirect(match.photo)
	})
}