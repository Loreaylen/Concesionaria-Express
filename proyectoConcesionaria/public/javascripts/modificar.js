const fs = require('fs')
const concesionarias = JSON.parse(fs.readFileSync('data/concesionarias.json', {encoding: 'utf-8'}))


const imagenesSucursales = ['https://img.freepik.com/foto-gratis/hombre-mujer-cerrando-trato_23-2148333035.jpg?w=996&t=st=1686919257~exp=1686919857~hmac=e9bb004c6f6f70adae91041ca177ca9215031f7e1262e6ef8a61ca50410967e2', 
'https://imgur.com/uWE3Z4s.jpg', 'https://imgur.com/5xpRCDV.jpg', 'https://imgur.com/sUrSDDJ.jpg', 'https://imgur.com/dxLRDpe.jpg']

for (let sucursal of concesionarias){
  const i = concesionarias.indexOf(sucursal)
//  sucursal.imagen = imagenesSucursales[i]
console.log(sucursal.autos)
}

const autos3febrero = ['https://ymimg1.b8cdn.com/resized/car_model/6392/logo/listing_main_2664.jpg',
'https://www.autodato.com/wp-content/uploads/2013/02/Peugeot-207-Compact-Argentina-01.jpg.webp',
'https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/cruze-5-premier/colorizer-1/02-images-2021/colorizer-branco-abalone.jpg?imwidth=960',
'https://da4dkroembtou.cloudfront.net/wp-content/uploads/2019/03/Clipboard014.jpg']


// const concesionariasJSON = JSON.stringify(concesionarias)
// fs.writeFileSync('data/concesionarias2.json', concesionariasJSON)