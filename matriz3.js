function gerarMatrizTransposta(matriz) {
  // Obter as dimensões da matriz original
  const numLinhas = matriz.length;
  // A quantidade de colunas é o tamanho da primeira linha
  const numColunas = matriz[0].length;

  // Criar a matriz transposta com as dimensões invertidas (colunas x linhas)
  const matrizTransposta = [];
  for (let j = 0; j < numColunas; j++) {
    matrizTransposta[j] = [];
  }

  // Preencher a matriz transposta
  // As colunas da matriz original se tornam as linhas da matriz transposta
  for (let i = 0; i < numLinhas; i++) {
    for (let j = 0; j < numColunas; j++) {
      matrizTransposta[j][i] = matriz[i][j];
    }
  }

  return matrizTransposta;
}

// Exemplo de uso:

// Matriz original de 3x2
const matrizOriginal = [
  [1, 2],
  [3, 4],
  [5, 6]
];

console.log("Matriz Original:");
console.table(matrizOriginal);

// Gerar a matriz transposta
const matrizTransposta = gerarMatrizTransposta(matrizOriginal);

console.log("Matriz Transposta:");
console.table(matrizTransposta);