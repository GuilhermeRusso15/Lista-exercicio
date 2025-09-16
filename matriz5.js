/**
 * Soma duas matrizes.
 * @param {Array<Array<number>>} matrizA A primeira matriz.
 * @param {Array<Array<number>>} matrizB A segunda matriz.
 * @returns {Array<Array<number>>|string} A matriz resultante da soma ou uma mensagem de erro.
 */
function somarMatrizes(matrizA, matrizB) {
  const linhasA = matrizA.length;
  const colunasA = matrizA[0].length;
  const linhasB = matrizB.length;
  const colunasB = matrizB[0].length;

  // Verifica se as matrizes têm as mesmas dimensões
  if (linhasA !== linhasB || colunasA !== colunasB) {
    return "Erro: As matrizes devem ter as mesmas dimensões para serem somadas.";
  }

  // Cria a matriz resultante com as mesmas dimensões
  const matrizSoma = [];
  for (let i = 0; i < linhasA; i++) {
    matrizSoma[i] = [];
    for (let j = 0; j < colunasA; j++) {
      // Soma os elementos correspondentes
      matrizSoma[i][j] = matrizA[i][j] + matrizB[i][j];
    }
  }

  return matrizSoma;
}

// --- Exemplos de Uso ---

// Exemplo 1: Soma válida (2x3)
const A = [
  [1, 2, 3],
  [4, 5, 6]
];

const B = [
  [7, 8, 9],
  [10, 11, 12]
];

console.log("Matriz A:");
console.table(A);
console.log("Matriz B:");
console.table(B);

const C = somarMatrizes(A, B);
console.log("Matriz Soma (A + B):");
console.table(C);

// Exemplo 2: Soma válida (2x2)
const D = [
  [1, 2],
  [3, 4]
];

const E = [
  [5, 6],
  [7, 8]
];

console.log("\n---");
console.log("Matriz D:");
console.table(D);
console.log("Matriz E:");
console.table(E);

const F = somarMatrizes(D, E);
console.log("Resultado da soma (D + E):");
console.table(F);