const express = require('express')
const router = express.Router()
const marcasControl = require('../controllers/marcasControl')

router.get('/', marcasControl.mostrarMarcas)

module.exports = router;