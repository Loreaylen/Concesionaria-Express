var express = require('express');
var router = express.Router();
const {getHome} = require('../controllers/indexControl')

/* GET home page. */
router.get('/', getHome);

module.exports = router;
