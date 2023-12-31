const fs = require('fs')
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json'), {encoding: 'utf-8'})
const {extraerMarcas, agrupar, incluye } = require('../utils/filtrarYagrupar')
const {traerMarca} = require ('../controllers/marcasControl')

const datosAutos = extraerMarcas(concesionarias, 'autos')
const ordenAlfabetico = datosAutos.sort((a,b) => (a.marca > b.marca) ? 1 : ((b.marca > a.marca) ? -1 : 0))
const agrupados = agrupar(ordenAlfabetico, 'marca')

const autosControl = {
'todosLosAutos': function(req, res){
res.render('autos', {site: 'Autos', autos:agrupados})
},
'datosMarca': function(req, res){
const marca = req.params.marca 
const dato = req.params.dato
const porDato = incluye(agrupados[marca], dato)
if(porDato.length > 0){
  res.render('datos', {site: `Datos de ${marca}`,marcaAuto: marca, autos: porDato})
}
else res.render('noEncontrado', {site: '404'})
}
}

module.exports = autosControl