// Number is a function

const peso1 = 1.0
const peso2 = Number('2.0')
const media = peso1*peso2

console.log('A multiplacação dos numeros é igual a : ',media )
console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) //confere se o numero é inteiro se sim 'true' se não 'false'
console.log(Number.isInteger(peso2)) //confere se o numero é inteiro se sim 'true' se não 'false'

const avaliação1 = 8.865
const avaliação2 = 7.213

const total = avaliação1 * avaliação2
const media2 = total /(peso1 + peso2)

console.log(media2.toFixed(2))  // O numero fica com duas casa decimais
console.log(media2.toString(2)) // Numero binario
console.log(typeof media2) // Revela o tipo da variavel ou de qualquer palavra reservada  
console.log(typeof Number)


