var mongoose = require('../configs/mongoose.js');
Schema = mongoose.Schema;

var Subthemes = new Schema({
	name : {
		type: String
	},
	userlabel : {
		type : String
	},
	theme : {
		type : String
	}
})

module.exports = mongoose.model('Subthemes', Subthemes);
