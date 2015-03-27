var News = require('../models/News');
var Themes = require('../models/Themes');
var Subthemes = require('../models/Subthemes');

function admin(express) {
	var router = express.Router();

	router.get('/', function(req, res, next) {
		Themes.find(function(err, json) {
			if (err) return next(err);
			Subthemes.find(function(err, json) {
					if (err) return next(err);
				res.render('admin', {
					themes : json
				});
			})
		})
	});

	router.post('/save/theme', function(req, res, next) {
		var t = new Themes({
			name : req.body.name
		})
		t.save(function(err, results) {
			if (err) return next(err);
			res.json({
				saved : 'ok'
			});
		})
	})

	router.post('/save/subtheme', function(req, res, next) {
		var st = new Subthemes({
			name : req.body.name,
			theme : req.body.theme
		})
		st.save(function(err, results) {
			if (err) return next(err);
			res.json({
				saved : 'ok'
			});
		})
	})

	return router;
}

module.exports = admin;