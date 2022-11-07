'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let resultado = 0
  const numero = num.split("").reverse().join("")
  for (let i = 0; i < numero.length; i++) {
    resultado += Math.pow(2, i) * numero[i]    
  }
  return resultado
}

function DecimalABinario(num) {
  // tu codigo aca
  let resultado = []
  do {
    resultado.unshift(num % 2)
    num = Math.trunc(num / 2)
  } while (num >= 1)
  return resultado.join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}