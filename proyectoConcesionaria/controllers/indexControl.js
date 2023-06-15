const fs = require('fs')
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', {encoding: 'utf-8'}))
const rutas = ['autos', 'marcas', 'sucursales']

const indexControl = {
'getHome':  function(req, res) {
res.render('index', {title: 'Concesionaria Express', site: 'Home', concesionarias: concesionarias})
},
'getError': function(req, res){
  const opcion = req.params.opcion
  if(!rutas.includes(opcion)){
    res.render('noEncontrado', {site: 404})
  }
}
}

module.exports = indexControl