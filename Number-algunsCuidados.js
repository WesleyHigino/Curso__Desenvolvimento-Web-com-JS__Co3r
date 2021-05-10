console.log(7/0) // a divisão pelo numero 0 retorna um 'infinity'.
console.log("10"/2) // em alguns casos como esse o js converte a string em um numero e realiza a operação. 
console.log("10.2"/2) // mas em alguns casos como esse , em que a =tring recebe um numero com ponto flutuante o js não reconhece
console.log("show" *2) // retorna um 'NaN' ,essa operacão é impossivel .
console.log(0.1 + 0.7) // O js não é preciso com esse tipo de calculo ,o resultado é 0.8 mas ele retorna 0.7999...
console.log((0.1 + 0.7).toFixed(2)) // reduzindo o numero de casas decimais é possivel deixar o resultado mais presiso
console.log((10.352).toFixed(1)) // É um jeito de converter as casas decimnais ou para uma string
console.log((10.352).toString()) // É um jeito de converter as casas decimnais ou para uma string

