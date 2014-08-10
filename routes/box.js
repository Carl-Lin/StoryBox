var mongoose = require ('mongoose'),
		dbBox = require('../modules/dbUtils/dbBox'),
		express = require('express');

var router = express.Router();

//get /box/
router.get('/', function(req, res, next){
		var Box = new dbBox({
				_id: new mongoose.Types.ObjectId,
				ownerid: 'thisisatest',
				owner_name: 'allen',
				story: 'trytrysee',
				longitude: 57.567,
				latitude: 14.6732,
				anonymous: false,
				opened: false
		});

		Box.save(function(err, data){
				if(err){
						console.log(err);
				}
				else{
					console.log('done');
				}
		});
});

module.exports = router;
