// Array é do tipo OBJECT

const valores = [2.3,4,5,88,23,54,4.6]

console.log(valores);//imprime todos os arrays
console.log(valores.length);// total de arrays
console.log(valores[0]);// imprime o primeiro array que esta na posição zero(0)
console.log(valores[2]+" e "+ valores[5]);
console.log(valores[10]);//quando especifico um indice que não esta no array ,é imprimido um undefined significando que não existe.

valores.push({id:3}, false,null ,'teste');//com o push é possivel puxar elementos para dentro do array.
console.log(valores)

console.log(valores.pop()) // retira o ultimo valor do array
delete valores[0] // esta é uma outra forma de excluir um elemento de um array

console.log(typeof valores)