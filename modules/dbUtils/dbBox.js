var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var boxSchema = new Schema({
		_id: Schema.Types.ObjectId,
		owner_id: {type: String},
		owner_name: {type: String},
		story: {type: String},
		longitude: Number,
		latitude: Number,
		anonymous: {type: Boolean, defalt: false},
		opened: {type: Boolean, defalt: false}
});

var box = mongoose.model('Box',boxSchema);
module.exports = box;

