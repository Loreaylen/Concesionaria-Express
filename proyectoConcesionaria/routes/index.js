var express = require('express');
var router = express.Router();
const indexControl = require('../controllers/indexControl')

/* GET home page. */
router.get('/', indexControl.getHome);


module.exports = router;
