const nome = 'você'

const tamplate = `oi
   como
   vai 
   ${nome} ? ` //para chamar uma variavel dentro de uma crase basta ustilizar ${}.

console.log(tamplate)

//fazer o uso de expressões com templates fica mais facil de manupular os dados.
console.log(`1 + 1 = ${1+1}`)

// utilizando função
const up = texto => texto.toUpperCase() 
console.log(`Ei ...${up('cuidado')}`)
