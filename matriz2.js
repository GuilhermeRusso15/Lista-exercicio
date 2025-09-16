function extrairDiagonalPrincipal() {
  // 1. Construir e preencher a matriz 50x50 com números reais
  const MAT = [];
  for (let i = 0; i < 50; i++) {
    MAT[i] = [];
    for (let j = 0; j < 50; j++) {
      // Preenche com números reais aleatórios entre 0 e 100
      MAT[i][j] = Math.random() * 100;
    }
  }

  // 2. Extrair a diagonal principal para o vetor
  const vetor_diagonal = [];
  for (let i = 0; i < 50; i++) {
    vetor_diagonal.push(MAT[i][i]);
  }

  // 3. Imprimir o vetor da diagonal principal
  console.log("Vetor da Diagonal Principal:");
  console.log(vetor_diagonal);
}

// Chamar a função para executar o algoritmo
extrairDiagonalPrincipal();