/**

 * @param {number[]} vetor - O vetor de 10 números inteiros.
 */
function imprimirVetorNosDoisSentidos(vetor) {
  
  console.log("Vetor na ordem original:");
  console.log(vetor);

  
  console.log("\nVetor na ordem inversa:");
  console.log(vetor.slice().reverse());
}


const numeros = [1, 7, 2, 8, 4, 5, 6, 10, 8, 9];


imprimirVetorNosDoisSentidos(numeros);