const fs = require('fs')
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json'), {encoding: 'utf-8'})
const {extraerMarcas, eliminarRepetidos} = require('../utils/filtrarYagrupar')
const datosMarcas = extraerMarcas(concesionarias, 'autos')

const marcasControl = {
'mostrarMarcas': function(req, res) {
const marcas = eliminarRepetidos(datosMarcas.map(el => el.marca))
res.render('marcas', {site: 'Marcas', marcas: marcas})
},
'traerMarca': function(req, res){
  const marca = req.params.marca
  const marcaElegida = datosMarcas.filter(el => el.marca === marca)
  if(marcaElegida.length > 0){
    res.render('marca', {site: marca, marcaElegida: marcaElegida})
  }
  else {
    res.render('marca', {site: marca, marcaElegida: marcaElegida, mensaje: "No hay datos"})
  }
}
}

module.exports = marcasControl;