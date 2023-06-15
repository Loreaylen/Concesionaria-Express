const express = require('express')
const router = express.Router()
const {mostrarMarcas, traerMarca} = require('../controllers/marcasControl')

router.get('/', mostrarMarcas)
router.get('/:marca', traerMarca)

module.exports = router;