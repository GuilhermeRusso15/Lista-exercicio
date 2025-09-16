const prompt = require('prompt-sync')({ sigint: true });

// Função para criar e preencher a matriz 4x4 com valores do usuário
function criarMatriz() {
  const matriz = [];
  console.log("Por favor, digite os 16 valores da matriz 4x4:");
  for (let i = 0; i < 4; i++) {
    matriz[i] = [];
    for (let j = 0; j < 4; j++) {
      let valor = parseFloat(prompt(`Elemento [${i}][${j}]: `));
      while (isNaN(valor)) {
        console.log("Entrada inválida. Por favor, digite um número.");
        valor = parseFloat(prompt(`Elemento [${i}][${j}]: `));
      }
      matriz[i][j] = valor;
    }
  }
  return matriz;
}

// Funções para as operações da matriz
function imprimirMatriz(matriz) {
  console.log("\n--- Matriz Completa ---");
  for (let i = 0; i < 4; i++) {
    console.log(matriz[i].join('\t'));
  }
  console.log("------------------------");
}

function somarQuadradosPrimeiraColuna(matriz) {
  let soma = 0;
  for (let i = 0; i < 4; i++) {
    soma += matriz[i][0] ** 2;
  }
  console.log(`\nSoma dos quadrados da primeira coluna: ${soma}`);
}

function somarTerceiraLinha(matriz) {
  let soma = 0;
  for (let j = 0; j < 4; j++) {
    soma += matriz[2][j];
  }
  console.log(`\nSoma dos elementos da terceira linha: ${soma}`);
}

function somarDiagonalPrincipal(matriz) {
  let soma = 0;
  for (let i = 0; i < 4; i++) {
    soma += matriz[i][i];
  }
  console.log(`\nSoma dos elementos da diagonal principal: ${soma}`);
}

function somarElementosIndiceParSegundaLinha(matriz) {
  let soma = 0;
  const linha = 1; // Segunda linha
  for (let j = 0; j < 4; j++) {
    if (j % 2 === 0) {
      soma += matriz[linha][j];
    }
  }
  console.log(`\nSoma dos elementos de índice par da segunda linha: ${soma}`);
}

// --- Lógica Principal do Programa ---

let matrizPrincipal = null;

while (true) {
  console.log("\n--- Menu de Opções ---");
  console.log("1. Criar/Reiniciar a Matriz (Ordem 4)");
  console.log("2. Imprimir todos os elementos da matriz");
  console.log("3. Somar os quadrados da primeira coluna");
  console.log("4. Somar todos os elementos da terceira linha");
  console.log("5. Somar elementos da diagonal principal");
  console.log("6. Somar elementos de índice par da segunda linha");
  console.log("7. Sair");

  const opcao = prompt("Digite o número da opção desejada: ");

  // Verificação inicial para opções que exigem a matriz
  if (opcao > '1' && opcao < '7' && !matrizPrincipal) {
    console.log("\nPor favor, crie a matriz primeiro (opção 1).");
    continue; // Volta para o início do loop
  }

  // Execução das opções
  switch (opcao) {
    case '1':
      matrizPrincipal = criarMatriz();
      console.log("\nMatriz criada com sucesso!");
      break;
    case '2':
      imprimirMatriz(matrizPrincipal);
      break;
    case '3':
      somarQuadradosPrimeiraColuna(matrizPrincipal);
      break;
    case '4':
      somarTerceiraLinha(matrizPrincipal);
      break;
    case '5':
      somarDiagonalPrincipal(matrizPrincipal);
      break;
    case '6':
      somarElementosIndiceParSegundaLinha(matrizPrincipal);
      break;
    case '7':
      console.log("\nEncerrando o programa...");
      process.exit();
    default:
      console.log("\nOpção inválida. Tente novamente.");
  }
}