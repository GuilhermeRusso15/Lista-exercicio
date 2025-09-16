/**
 * Programa que organiza números inteiros fornecidos pelo usuário.
 * Pares em ordem crescente e ímpares em ordem decrescente.
 */
function organizarNumeros() {
    let numeros = [];
    
    // Coleta os números do usuário
    console.log("Digite números inteiros. Digite 'fim' para parar.");
    
    // Configura o readline para ler a entrada do usuário via terminal
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Função recursiva para ler cada linha de entrada
    function lerLinha() {
        readline.question("Digite um número ou 'fim': ", (entrada) => {
            if (entrada.toLowerCase() === 'fim') {
                readline.close();
                processarNumeros(numeros);
                return;
            }
            try {
                const numero = parseInt(entrada);
                if (!isNaN(numero)) {
                    numeros.push(numero);
                } else {
                    console.log("Entrada inválida. Por favor, digite um número inteiro ou 'fim'.");
                }
            } catch (e) {
                console.log("Ocorreu um erro. Por favor, digite um número inteiro ou 'fim'.");
            }
            lerLinha(); // Chama a função novamente para a próxima entrada
        });
    }

    // Inicia a leitura
    lerLinha();
}

/**
 * Processa o array de números, separando-os e organizando-os.
 * @param {Array<number>} numeros - O array de números fornecido pelo usuário.
 */
function processarNumeros(numeros) {
    if (numeros.length === 0) {
        console.log("Nenhum número foi fornecido.");
        return;
    }

    // Separa os números em listas de pares e ímpares
    const pares = numeros.filter(num => num % 2 === 0);
    const impares = numeros.filter(num => num % 2 !== 0);

    // Organiza os vetores
    // Pares em ordem crescente
    pares.sort((a, b) => a - b);
    // Ímpares em ordem decrescente
    impares.sort((a, b) => b - a);

    // Combina os vetores
    const vetorFinal = [...pares, ...impares];

    // Exibe o resultado
    console.log("\n--- Vetor Organizado ---");
    console.log(`Números originais: [${numeros.join(', ')}]`);
    console.log(`Números pares (ordem crescente): [${pares.join(', ')}]`);
    console.log(`Números ímpares (ordem decrescente): [${impares.join(', ')}]`);
    console.log(`Vetor final: [${vetorFinal.join(', ')}]`);
}

// Inicia o programa
organizarNumeros();