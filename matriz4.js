/**
 * Multiplica duas matrizes.
 * @param {Array<Array<number>>} matrizA A primeira matriz.
 * @param {Array<Array<number>>} matrizB A segunda matriz.
 * @returns {Array<Array<number>>|string} A matriz resultante ou uma mensagem de erro.
 */
function multiplicarMatrizes(matrizA, matrizB) {
  const linhasA = matrizA.length;
  const colunasA = matrizA[0].length;
  const linhasB = matrizB.length;
  const colunasB = matrizB[0].length;

  // Verifica se a multiplicação é possível
  if (colunasA !== linhasB) {
    return "Erro: O número de colunas da primeira matriz deve ser igual ao número de linhas da segunda matriz.";
  }

  // Cria a matriz resultante com as dimensões corretas (linhasA x colunasB)
  const matrizResultado = new Array(linhasA);
  for (let i = 0; i < linhasA; i++) {
    matrizResultado[i] = new Array(colunasB).fill(0);
  }

  // Realiza a multiplicação
  for (let i = 0; i < linhasA; i++) {
    for (let j = 0; j < colunasB; j++) {
      for (let k = 0; k < colunasA; k++) {
        matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
      }
    }
  }

  return matrizResultado;
}

// --- Exemplos de Uso ---

// Exemplo 1: Multiplicação Válida (2x3 e 3x2)
const A = [
  [1, 2, 3],
  [4, 5, 6]
];

const B = [
  [7, 8],
  [9, 10],
  [11, 12]
];

console.log("Matriz A:");
console.table(A);
console.log("Matriz B:");
console.table(B);

const C = multiplicarMatrizes(A, B);
console.log("Matriz Resultado (A x B):");
console.table(C);

// Exemplo 2: Multiplicação agora é Válida (2x2 e 2x3)
const D = [
  [1, 2],
  [3, 4]
];

const E = [
  [5, 6, 7],
  [8, 9, 10]
];

console.log("---");
console.log("Matriz D:");
console.table(D);
console.log("Matriz E:");
console.table(E);

const F = multiplicarMatrizes(D, E);
console.log("Resultado (D x E):");
console.table(F);