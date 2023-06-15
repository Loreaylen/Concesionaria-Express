const express = require('express')
const router = express.Router()
const {todosLosAutos, autosPorMarca, datosMarca} = require('../controllers/autosControl')

router.get('/', todosLosAutos)
router.get('/:marca', autosPorMarca)
router.get('/:marca/:dato', datosMarca)

module.exports = router