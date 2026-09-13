// padronizei os arrays pra um so
let listaDeVoos = [];

// ========================================================
// DESAFIO 1: O BOOT DO SISTEMA (Carregando a Caixa-Preta)
// ========================================================
// 1. Tenta buscar os voos salvos no disco com o nome "diario_de_voos"
let voosSalvos = localStorage.getItem("diario_de_voos");

if (voosSalvos !== null) {
    // Se achou algo no disco, converte de TEXTO (JSON) de volta para ARRAY DE OBJETOS!
    listaDeVoos = JSON.parse(voosSalvos);
} else {
    // Se for a primeira vez que o sistema roda, começa com um array vazio.
    listaDeVoos = [];
}

const tela = document.getElementById("telaDoAeroporto");

function atualizarPainel() {
    tela.innerHTML = "";

    listaDeVoos.forEach(voo => {
        let novoCard = document.createElement("div");
        novoCard.classList.add("card-voo");

        novoCard.innerHTML = `
            <h3>Voo ${voo.codigo} - Destino: ${voo.destino}</h3>
            <p>Status: ${voo.status}</p>
        `;

        let botaoDecolar = document.createElement("button");
        botaoDecolar.classList.add("botao-decolar");
        botaoDecolar.innerText = "Decolar";
        botaoDecolar.addEventListener("click", () => {
            alert(`O voo ${voo.codigo} decolou!`);
        });
        novoCard.appendChild(botaoDecolar);

        tela.appendChild(novoCard);
    });
}

// Executa a função que já criamos para desenhar a tela
atualizarPainel();

// ========================================================
// DESAFIO 2: SALVANDO UM NOVO VOO (Gravando na Caixa-Preta)
// ========================================================
const formulario = document.getElementById("formDespacho");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Impede o F5 que já fizemos!

    let codigoDigitado = document.getElementById("inputCodigo").value;
    let destinoDigitado = document.getElementById("inputDestino").value;

    let novoVoo = { codigo: codigoDigitado, destino: destinoDigitado, status: "Embarque" };

    // Adiciona na RAM (Array)
    listaDeVoos.push(novoVoo);

    // O LocalStorage SÓ ACEITA TEXTO. Não podemos salvar um Array/Objeto direto.
    // 1. Converte o array 'listaDeVoos' em um Texto JSON:
    let arrayConvertidoEmTexto = JSON.stringify(listaDeVoos);

    // 2. Salva esse texto no LocalStorage com a "chave" (nome) de "diario_de_voos":
    localStorage.setItem("diario_de_voos", arrayConvertidoEmTexto);

    // Atualiza a tela visualmente e limpa o formulário
    atualizarPainel();
    document.getElementById("inputCodigo").value = "";
    document.getElementById("inputDestino").value = "";
});
