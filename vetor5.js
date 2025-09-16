
const tamanhoVetor = 20;


const vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const vetor2 = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];


const vetorDiferenca = [];
const vetorSoma = [];
const vetorMultiplicacao = [];


for (let i = 0; i < tamanhoVetor; i++) {
    vetorDiferenca.push(vetor1[i] - vetor2[i]);
    vetorSoma.push(vetor1[i] + vetor2[i]);
    vetorMultiplicacao.push(vetor1[i] * vetor2[i]);
}


console.log("--- Resultados ---");
console.log(`Vetor 1: [${vetor1.join(', ')}]`);
console.log(`Vetor 2: [${vetor2.join(', ')}]`);
console.log(`Vetor Diferença: [${vetorDiferenca.join(', ')}]`);
console.log(`Vetor Soma: [${vetorSoma.join(', ')}]`);
console.log(`Vetor Multiplicação: [${vetorMultiplicacao.join(', ')}]`);