const fs = require('fs')
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json'), {encoding: 'utf-8'})
const {extraerMarcas, eliminarRepetidos} = require('../utils/filtrarYagrupar')

const marcasControl = {
'mostrarMarcas': function(req, res) {
const marcas = eliminarRepetidos(extraerMarcas(concesionarias))
res.render('marcas', {site: 'Marcas', marcas: marcas})
}
}

module.exports = marcasControl;