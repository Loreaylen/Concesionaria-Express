const funciones = {
'extraerMarcas': function(arrObj, prop) {
  const array = arrObj.reduce((acc, curr) => {
    if(Object.hasOwn(curr, prop)){
      acc.push(...curr[prop])
    }
    return acc
     }, [])
  return array
},
'eliminarRepetidos': function(arr) {
  const alfabetico = arr.sort()
  const arrayReducido = alfabetico.reduce((acc,curr)=> {
    let ultimo = acc[acc.length -1]
    if(ultimo && ultimo === curr){
      ultimo = curr
    } else {
      acc.push(curr)
    }
    return acc
  }, [])
  return arrayReducido
},
'agrupar': function(arrObj, prop){
  const agrupados = {}
  for(let i = 0; i < arrObj.length; i++){
    const actual = arrObj[i][prop]
    agrupados[actual] === undefined ? agrupados[actual] = [arrObj[i]] : agrupados[actual].push(arrObj[i])
  }
  return agrupados
  },
  'buscar': (obj, val) => {
     const arrEntries = Object.entries(obj)
     const par = arrEntries.find(el => el[1] == val)
    return par ? par[0] :  "Sin coincidencias"
  },
  'incluye': function(arrObj, val){
    const incluidos = []
   for(let obj of arrObj){
   const valores = Object.keys(obj) 
   const clave = funciones.buscar(obj, val)
   if(valores.includes(clave)){
    incluidos.push(obj)
   }
   }
   return incluidos
  }
}

module.exports = funciones;