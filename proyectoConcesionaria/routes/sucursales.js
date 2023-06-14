var express = require('express');
var router = express.Router();
const sucursalesControl = require('../controllers/sucursalesControl')

router.get('/', sucursalesControl.traerTodas);
router.get('/:sucursal', sucursalesControl.traerSucursal);

module.exports = router;
 