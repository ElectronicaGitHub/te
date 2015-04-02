var Themes = require('../models/Themes');
var Tour = require('../models/Tour');

function admin(express) {
	var router = express.Router();

	router.get('/', function (req, res, next) {
		Themes.find(function (err, json) {
			if (err) return next(err);
			Tour.find(function (err, json2) {
				if (err) return next(err);
				res.render('admin', {
					themes : json,
					tours : json2
				});	
			})
		})
	});

	// saves

	router.post('/save/theme', function (req, res, next) {
		var t = new Themes(req.body);
		t.save(function (err, results) {
			if (err) return next(err);
			res.json({
				result : 'theme saved'
			});
		})
	})

	router.post('/save/tour', function (req, res, next) {
		var t = new Tour(req.body);
		t.save(function (err, results) {
			if (err) return next(err);
			res.json({
				result : 'tour saved'
			});
		})
	})

	// updates

	router.post('/update/theme', function (req, res, next) {
		var t = req.body;
		var id = req.body._id;
		delete t._id;
		delete t.__v;
		delete t.tours;
		Themes.findOneAndUpdate({ _id : id }, t, function (err, results) {
			if (err) return next(err);
			res.json({
				result : 'theme updated'
			});
		})
	})

	router.post('/update/tour', function (req, res, next) {
		var t = req.body;
		var id = req.body._id;
		delete t._id;
		delete t.__v;
		Tour.findOneAndUpdate({ _id : id }, t, function (err, results) {
			if (err) return next(err);
			res.json({
				result : 'tour updated'
			});
		})
	})

	return router;
}

module.exports = admin;