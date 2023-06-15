const express = require('express')
const router = express.Router()
const {mostrarMarcas, traerMarca} = require('../controllers/marcasControl')
const {datosMarca} = require('../controllers/autosControl')

router.get('/', mostrarMarcas)
router.get('/:marca', traerMarca)
router.get('/:marca/:dato', datosMarca)

module.exports = router;