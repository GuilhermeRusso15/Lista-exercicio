
function inverteEImprimeVetores() {
  
  const vetorOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  
  const vetorInvertido = [...vetorOriginal].reverse();

  
  console.log("Vetor Original:");
  console.log(vetorOriginal);

  console.log("\nNovo Vetor (Ordem Inversa):");
  console.log(vetorInvertido);
}


inverteEImprimeVetores();