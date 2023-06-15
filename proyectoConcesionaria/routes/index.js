var express = require('express');
var router = express.Router();
const {getHome, getError} = require('../controllers/indexControl')

/* GET home page. */
router.get('/', getHome);
router.get('/:opcion', getError);

module.exports = router;
