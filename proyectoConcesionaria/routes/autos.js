const express = require('express')
const router = express.Router()
const {todosLosAutos,  datosMarca} = require('../controllers/autosControl')
const { traerMarca } = require('../controllers/marcasControl')

router.get('/', todosLosAutos)
router.get('/:marca', traerMarca)
router.get('/:marca/:dato', datosMarca)

module.exports = router