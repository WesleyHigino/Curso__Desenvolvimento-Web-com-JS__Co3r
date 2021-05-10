//ATRIBUIÇÃO POR REFERENCIA = se a contante  'a' for alterada 'b' vai perceber a mudança e tambem será alterado

const a = {idade:23} //Por baixo dos panos 'a' nào tem esse valor esse valor ,acontece que a constante 'a' tem um endereço de memoria no qual esse objeto esta localizado
const b = a // quando digo que b=a ,estou dizendo que as duas constantes apontam para o mesmo endereço
console.log(b) 
b.idade = 25
console.log(a)
console.log(b) // se b recebe o mesmo endereço que a, então b recebe o atributo 'idade:23'


//COPIA POR VALOR = quando se esta trabalhando com tipos primitivos , é feito uma copia por valor é passado para variavel 'd' da tal forma que 'c' tem o seu valor e 'd' tem o seu ,cada uma é independente.

let c = 3
let d = c 
console.log(d)
d++
console.log(d) //'d' recebe ++ e o valor fica igual a 4 , mas c continua valendo 3
console.log(c)
