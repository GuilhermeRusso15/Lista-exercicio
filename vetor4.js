
const readline = require('readline');


const nomes = [
  "Guilherme",
  "Bruno",
  "Carlos",
  "Diana",
  "Eduardo",
  "Fernanda",
  "Gabriel",
  "Helena",
  "Igor",
  "Juliana"
];


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Digite um nome para buscar: ', (nomeBuscado) => {
  
  if (nomes.includes(nomeBuscado)) {
    console.log("ACHEI");
  } else {
    console.log("NÃO ACHEI");
  }
  
  
  rl.close();
});