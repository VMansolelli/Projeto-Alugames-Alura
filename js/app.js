//V1.2 Inicia a contagem com a quantidade de jogos já alugados
let alugados = document.querySelectorAll('.dashboard__item__img--rented').length;

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    //V1.2 Adicionado confirmação de devolução
    if(botao.textContent == "Devolver") {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            //V1.2 Adicionado quantidade de boardgames alugados
            alugados--;
            alterarStatusImagem(imagem);
            alterarStatusBotao(botao);
        }
        //V1.2 Adicionado confirmação de aluguel
    } else {
        if (confirm(`Você tem certeza que deseja alugar o jogo ${nomeJogo.textContent}?`)) {
            //V1.2 Adicionado quantidade de boardgames alugados
            alugados++;
            alterarStatusImagem(imagem);
            alterarStatusBotao(botao);
        }
    }    
    alert (`Quantidade de boardgames alugados ${alugados}`);

    
}


function alterarStatusImagem(imagem) {
    if(imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
    } else {
        imagem.classList.add('dashboard__item__img--rented');
    }
}

function alterarStatusBotao(botao) {
    if(botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = "Alugar";
    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = "Devolver";
    }
    
    
}
