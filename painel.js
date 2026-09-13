// Simulando os dados que vieram do Radar (Array de Objetos)
const listaDeVoos = [
    { codigo: "G3-100", destino: "São Paulo", status: "Embarque", portao: "01" },
    { codigo: "LA-200", destino: "Rio de Janeiro", status: "Atrasado", portao: "04" },
    { codigo: "AD-300", destino: "Campinas", status: "Confirmado", portao: "02" }
];

// Capturamos a div vazia do HTML onde os voos devem aparecer
const tela = document.getElementById("telaDoAeroporto");

// DESAFIO 1: A Função de Renderização Dinâmica
function atualizarPainel() {
    // Passo 1: Limpar a tela antes de desenhar, para não duplicar os voos
    tela.innerHTML = "";

    // Passo 2: Percorrer o Array
    listaDeVoos.forEach(voo => {
        // 1. Cria o elemento <div>
        let novoCard = document.createElement("div");

        // 2. Coloca a classe CSS "card-voo" nessa div
        novoCard.classList.add("card-voo");

        // 3. Coloca o texto do voo dentro da div (Template String)
        novoCard.innerHTML = `
            <h3>Voo ${voo.codigo} - Destino: ${voo.destino}</h3>
            <p>Status: ${voo.status} | Portão: ${voo.portao}</p>
        `;

        // DESAFIO 2: Botão de decolar com evento de clique
        let botaoDecolar = document.createElement("button");
        botaoDecolar.classList.add("botao-decolar");
        botaoDecolar.innerText = "Decolar";
        botaoDecolar.addEventListener("click", () => {
            alert(`O voo ${voo.codigo} decolou!`);
        });
        novoCard.appendChild(botaoDecolar);

        // 4. Prende essa nova div dentro da "tela"
        tela.appendChild(novoCard);
    });
}

// Executando a função para desenhar a tela inicial
atualizarPainel();
