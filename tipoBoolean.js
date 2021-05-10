let ativo = false
console.log(ativo)

ativo = true
console.log(ativo)

ativo = 1            // !! ou ! são operadores logicos de negação
console.log(!!ativo) // !! true   
console.log(!ativo)  //  ! false

console.log('os verdadeiros...(true)') //Resolve pra verdadeiro
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(ativo = 33))


console.log('os falsos...(false)') //Resolve para falso
console.log(!!0)
console.log(!!'') //sem espaço ou sem instrução
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(ativo = false))




