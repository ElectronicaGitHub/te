var Themes = require('../models/Themes');
var Tour = require('../models/Tour');

function admin(express) {
	var router = express.Router();

	router.get('/', function(req, res, next) {
		Themes.find(function(err, json) {
			if (err) return next(err);
			Tour.find(function(err, json2) {
				if (err) return next(err);
				res.render('admin', {
					themes : json,
					tours : json2
				});	
			})
		})
	});

	router.post('/save/theme', function(req, res, next) {
		var t = new Themes(req.body);
		t.save(function(err, results) {
			if (err) return next(err);
			res.json({
				saved : 'ok'
			});
		})
	})

	router.post('/save/tour', function(req, res, next) {
		var t = new Tour(req.body);
		t.save(function(err, results) {
			if (err) return next(err);
			res.json({
				saved : 'ok'
			});
		})
	})

	return router;
}

module.exports = admin;