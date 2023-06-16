var express = require('express');
var router = express.Router();
const {getHome} = require('../controllers/indexControl')
const datos = require('../data/concesionarias2.json')



/* GET home page. */
router.get('/', getHome);

router.get('/test', function(req,res) {
  res.send(datos)
})

module.exports = router;
