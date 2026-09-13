import Voo from './Voo.js';
import Aeroporto from './Aeroporto.js';

let aeroportoCWB = new Aeroporto("Afonso Pena");

let voo1 = new Voo("G3-100", "São Paulo");
let voo2 = new Voo("LA-200", "Rio de Janeiro");

// Testando o Desafio 1
aeroportoCWB.adicionarVooNoRadar(voo1);
aeroportoCWB.adicionarVooNoRadar(voo2);

// Testando o Desafio 2
let vooAchado = aeroportoCWB.buscarVoo("LA-200");
console.log(vooAchado); // Tem que mostrar os dados do voo do Rio de Janeiro!
