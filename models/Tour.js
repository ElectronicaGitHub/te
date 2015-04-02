var mongoose = require('../configs/mongoose.js');
Schema = mongoose.Schema;

var Tour = new Schema({
	name : {
		type: String
	},
	content : {
		type : String
	},
	userlabel : {
		type : String
	},
	theme : {
		type : String
	},
	image : {
		type : String
	}
})

module.exports = mongoose.model('Tour', Tour);
