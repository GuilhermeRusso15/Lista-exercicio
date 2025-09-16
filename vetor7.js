/**
 
 @param {Array<any>} vetor1 
  @param {Array<any>} vetor2 
 @returns {boolean} 
 */
function temConteudoIgual(vetor1, vetor2) {
    
    if (vetor1.length !== vetor2.length) {
        return false;
    }

    
    if (vetor1.length === 0) {
        return true;
    }

    
    const vetor1Ordenado = [...vetor1].sort();
    const vetor2Ordenado = [...vetor2].sort();

    
    for (let i = 0; i < vetor1Ordenado.length; i++) {
        if (vetor1Ordenado[i] !== vetor2Ordenado[i]) {
            return false; 
        }
    }

    
    return true;
}




const a = [1, 2, 3];
const b = [3, 1, 2];
console.log(`Os vetores ${a} e ${b} têm conteúdo igual?`, temConteudoIgual(a, b)); 


const c = ["a", "b", "c"];
const d = ["a", "b", "c"];
console.log(`Os vetores ${c} e ${d} têm conteúdo igual?`, temConteudoIgual(c, d)); 


const e = [1, 2, 3];
const f = [1, 2, 4];
console.log(`Os vetores ${e} e ${f} têm conteúdo igual?`, temConteudoIgual(e, f)); 


const g = [1, 2];
const h = [1, 2, 3];
console.log(`Os vetores ${g} e ${h} têm conteúdo igual?`, temConteudoIgual(g, h)); 

const i = [];
const j = [];
console.log(`Os vetores ${i} e ${j} têm conteúdo igual?`, temConteudoIgual(i, j)); 