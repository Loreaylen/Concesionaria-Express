const funciones = {
'extraerMarcas': function(arrObj) {
  const array = arrObj.reduce((acc, curr) => {
    if(Object.hasOwn(curr, 'autos')){
      acc.push(...curr.autos)
    }
    return acc
     }, [])
  const array2 = array.map(el => el.marca)
  return array2
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
}
}


module.exports = funciones;