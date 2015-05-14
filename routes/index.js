var Tour = require('../models/Tour');
var Themes = require('../models/Themes');

function fn(express) {
	var router = express.Router();
	
	router.get('/', function(req, res, next) {
		Themes.find(function(err, themes) {
			res.render('index', {
				themes: themes
			});
			
		})
	});

	router.get('/:theme', function(req, res, next) {
		Themes.findOne({
			userlabel : req.params.theme
		}, function(err, result) {
			if (result && result.userlabel) {
				Tour.find({
					theme : result.userlabel
				}, function(err, result2) {
					console.log(result);
					if (err) return next(err);
					res.render('theme', {
						theme : result,
						tours : result2
					})
				})
			} else {
				res.redirect('/')
			}
		})
	})

	router.get('/:theme/:tour', function(req, res, next) {
		Themes.findOne({
			userlabel : req.params.theme
		}, function(err, result1) {
			Tour.findOne({
				userlabel : req.params.tour,
				theme : req.params.theme
			}, function(err, result2) {
				if (err) return next(err);
				if (result1 && result2) {
					res.render('tour',  {
						tour : result2,
						theme : result1
					})
				} else {
					res.redirect('/');
				}
			})
		})
	})

	return router;
}

module.exports = fn;