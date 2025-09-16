function processarVetores() {
  
  const vetorOriginal = [10, 5, 20, 15, 30, 25, 40, 35, 50, 45];
  
  
  const vetorProcessado = [];

  
  for (let i = 0; i < vetorOriginal.length; i++) {
    
    if (i % 2 === 0) {
      
      vetorProcessado.push(vetorOriginal[i] / 2);
    } else {
      
      vetorProcessado.push(vetorOriginal[i] * 3);
    }
  }

 
  console.log("Vetor Original:");
  console.log(vetorOriginal);

  console.log("\nVetor Processado:");
  console.log(vetorProcessado);
}


processarVetores();