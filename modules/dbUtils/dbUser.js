var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var userSchema = new Schema({
		name: {type: String},
		boxeid: [{type: String}]
});

var user = mongoose.model('User',userSchema);
module.exports = user;