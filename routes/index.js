var News = require('../models/News');
var Themes = require('../models/Themes');
var Subthemes = require('../models/Subthemes');

function fn(express) {
	var router = express.Router();
	
	router.get('/', function(req, res) {
		res.render('index');
	});

	router.get('/:theme', function(req, res, next) {
		console.log(req.params.theme);
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

	return router;
}

module.exports = fn;