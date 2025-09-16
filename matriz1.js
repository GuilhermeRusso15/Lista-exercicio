function processarMatriz() {
  // 1. Construir a matriz 10x15 com números inteiros aleatórios
  const MAT = [];
  for (let i = 0; i < 10; i++) {
    MAT[i] = [];
    for (let j = 0; j < 15; j++) {
      MAT[i][j] = Math.floor(Math.random() * 100); // Exemplo: números entre 0 e 99
    }
  }

  console.log("Matriz gerada:");
  console.table(MAT);
  console.log("---");

  // 2. Processar a soma dos elementos de cada linha
  console.log("Soma de cada linha:");
  for (let i = 0; i < 10; i++) {
    const somaLinha = MAT[i].reduce((soma, elemento) => soma + elemento, 0);
    const paridade = somaLinha % 2 === 0 ? "Par" : "Ímpar";
    console.log(`Linha ${i}: ${somaLinha} (${paridade})`);
  }

  console.log("---");

  // 3. Processar a soma dos elementos de cada coluna
  const somaColunas = new Array(15).fill(0);
  for (let j = 0; j < 15; j++) {
    for (let i = 0; i < 10; i++) {
      somaColunas[j] += MAT[i][j];
    }
  }

  console.log("Soma de cada coluna:");
  for (let j = 0; j < 15; j++) {
    const paridade = somaColunas[j] % 2 === 0 ? "Par" : "Ímpar";
    console.log(`Coluna ${j}: ${somaColunas[j]} (${paridade})`);
  }
}

// Chamar a função para executar o algoritmo
processarMatriz();