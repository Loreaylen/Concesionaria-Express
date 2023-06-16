const fs = require('fs')
const sucursales = JSON.parse(fs.readFileSync('./data/concesionarias.json', {encoding: 'utf-8'}))

const sucursalesControl = {
  'traerTodas': function(req, res) {
    res.render('sucursales', {site: 'Sucursales', sucursales: sucursales})
  },
  'traerSucursal': function(req, res) {
    const nombreSucursal = req.params.sucursal
    const sucursal = sucursales.find(el => el.sucursal === nombreSucursal)
    if(sucursal) {
      res.render('sucursal', {site: sucursal.sucursal, sucursal: sucursal})
    }
    else {
      res.render('noEncontrado', {site: 404})
    }
    
  }
}

module.exports = sucursalesControl