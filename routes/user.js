var mongoose = require ('mongoose'),
		dbUser = require('../modules/dbUtils/dbUser'),
		express = require('express');

var router = express.Router();

//get /user/
router.get('/', function(req, res, next){
		res.render('user');
});

module.exports = router;
