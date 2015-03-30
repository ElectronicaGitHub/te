var Tour = require('../models/Tour');
var Themes = require('../models/Themes');

function fn(express) {
	var router = express.Router();
	
	router.get('/', function(req, res) {
		res.render('index');
	});

	router.get('/:theme', function(req, res, next) {
		Themes.findOne({
			userlabel : req.params.theme
		}, function(err, result) {
			console.log(result);
			if (err) return next(err);
			res.render('theme', {
				theme : result
			})
		})
	})

	router.get('/:theme/:tour', function(req, res, next) {
		Tour.findOne({
			userlabel : req.params.userlabel,
			theme : req.params.theme
		}, function(err, result) {
			if (err) return next(err);
			res.render('tour',  {
				tour : result
			})
		})
	})

	return router;
}

module.exports = fn;