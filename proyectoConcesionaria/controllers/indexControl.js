const fs = require('fs')
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', {encoding: 'utf-8'}))

const indexControl = {
'getHome':  function(req, res) {
res.render('index', {title: 'Concesionaria Express', concesionarias: concesionarias})
}
}

module.exports = indexControl