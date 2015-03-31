var mongoose = require('../configs/mongoose.js');
Schema = mongoose.Schema;

var Themes = new Schema({
	name : {
		type: String
	},
	userlabel : {
		type : String
	},
	image : {
		type : String
	}
})

module.exports = mongoose.model('Themes', Themes);
