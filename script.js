let escolhaJogador; // Recebe os valores em string do jogador para a análise do jogo
let escolhaComputador; // Recebe os valores em string do computador para a análise do jogo
let placarJ = 0; // Placar do jogador
let placarC = 0; // Placar do computador
// Armazenar local para placar do Jogador e Computador
const placarJogador = document.getElementById("placar-jogador");
const placarComputador = document.getElementById("placar-computador");
placarJogador.innerHTML = placarJ;
placarComputador.innerHTML = placarC;
// Variável criada para funcionar os inputs radio após o termino da rodada
let rodadaAcabou = false;
// Input's radio com as opções para o usuário
let opcaoOne = document.getElementById("opcoes-jogador-pedra");
let opcaoTwo = document.getElementById("opcoes-jogador-papel");
let opcaoThree = document.getElementById("opcoes-jogador-tesoura");
// Armazenando local para recebimento e troca de imagens e gif pelo
const imagemEscolhaJogador = document.getElementById("img-jogador");
const imagemEscolhacomputador = document.getElementById("img-computador");
// Armazenar local para mostrar a jogada feita pelo método math
const ladoComputador = document.getElementById("escolha-jogador-computador");
// Armazenar local para mostrar o resultado
const resultado = document.getElementById("resultado");

function selecionarOpcao(){ // Função que verifica em qual opção está selecionado ao clicar
    switch(true){ 
        case opcaoOne.checked && rodadaAcabou == false:
            imagemEscolhaJogador.src = "img/pedra.jpg"; // Autor desconhecido - https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspXHHtbLLELOjTr_Qf63exDbSM2nsriRTVA&usqp=CAU
            situacaoBtn(2,"off"); 
            break;
        case opcaoTwo.checked && rodadaAcabou == false:
            imagemEscolhaJogador.src = "img/papel.jpg"; // Autor desconhecido - https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBKyo4QNbO_UCaTEhpSACbb6KrktofAkkhg&usqp=CAU
            situacaoBtn(2,"off"); 
            break;
        case opcaoThree.checked && rodadaAcabou == false:
            imagemEscolhaJogador.src = "img/tesoura.jpg"; // Autor desconhecido - https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2N8YNUTuYpkK74FZS3KYZdKQ_Mmq5N8m9hA&usqp=CAU
            situacaoBtn(2,"off");
            break;
       case opcaoOne.checked && rodadaAcabou == true:
            situacaoBtn(2,"on");
            imagemEscolhaJogador.src = "img/pedra.jpg";
            break;
        case opcaoTwo.checked && rodadaAcabou == true:
            situacaoBtn(2,"on");
            imagemEscolhaJogador.src = "img/papel.jpg";
            break;
        case opcaoThree.checked && rodadaAcabou == true:
            situacaoBtn(2,"on");
            imagemEscolhaJogador.src = "img/tesoura.jpg";
            break;
    }
}

function selecaoComputador(){ // Função que interpreta a escolha feita pelo método math.floor e random
    if(escolhaComputador == 1){ // Pega o valor da escolha computador no escopo da função
        ladoComputador.innerHTML = "Pedra"; // Registrando o que o "computador" escolheu
        imagemEscolhacomputador.src = "img/pedra.jpg"; // junto a imagem da escolha
        return "pedra";
    }else if( escolhaComputador == 2){
        ladoComputador.innerHTML = "Papel";
        imagemEscolhacomputador.src = "img/papel.jpg";
        return "papel";
    }else if(escolhaComputador == 3){
        ladoComputador.innerHTML = "Tesoura"; 
        imagemEscolhacomputador.src = "img/tesoura.jpg";
        return "tesoura";
    }
}

function marcarPontos(j,c){ // Função que registra na página html o resultado e o placar
    switch(true){ 
        case j == c: // j = parâmetro jogador e c = parâmetro do computador
            resultado.innerHTML = "Empate!" // Mostra o resultado dos dois lados
            console.log("empate");
            break;
        case j == "pedra" &&  c == "tesoura" || j == "papel" && c == "pedra" || j == "tesoura" && c == "papel":
            resultado.innerHTML = "Ganhou!"
            placarJ +=1; // Adiciona 1 ponto ao ganhar
            placarJogador.innerHTML = placarJ; // Registra esse valor na página
            console.log("ganhou");
            break;
        case j == "pedra" &&  c == "papel" || j == "papel" && c == "tesoura" || j == "tesoura" && c == "pedra":
            resultado.innerHTML = "Perdeu!"
            placarC +=1; // Adiciona 1 ponto para o compuatdor ao perder
            placarComputador.innerHTML = placarC; // Registra esse valor na página
            console.log("perdeu");
            break;
        case j == 0 && c == 1: // Caso feito para o callback ao clicar no button reiniciar, zerando os placares
            placarJ = 0;
            placarC = 0;
            placarJogador.innerHTML = placarJ;
            placarComputador.innerHTML = placarJ;
            break;
    }
    console.log(placarJ,placarC); // Debugar
    rodadaAcabou = true; // Indica que a rodada acabou porém 
    situacaoBtn(2,"on"); // Chama a função para ativar o button continuar
}

function situacaoBtn(btn,situacao){ // Função que desliga e liga os buttons continuar e reiniciar dependendo da chamada
    const btnIniciar = document.getElementById("botao-iniciar");
    const btnContinuar = document.querySelector('#botao-continuar');
    if( btn == 1 && situacao == "off"){
        btnIniciar.setAttribute('disabled','disabled'); // Desativando adicionando atributo disabled
    }else if(btn == 1 && situacao == "on"){
        btnIniciar.removeAttribute('disabled'); // Ativando retirando o atributo disabled
    }else if(btn == 2 && situacao == "off"){
        btnContinuar.setAttribute('disabled','disabled');
    }else if(btn == 2 && situacao == "on"){
        btnContinuar.removeAttribute('disabled');
    }
}

const btnIniciar = document.getElementById("botao-iniciar").onclick = function(){ // Ao clicar em desafiar vai verificar essas situações
    if(!opcaoOne.checked && !opcaoTwo.checked && !opcaoThree.checked){ // verifica se foi selecionado alguma opção
        window.alert("Selecione pelo menos uma das opções!");  
    }else if(opcaoOne.checked){// Selecionado pedra
        escolhaJogador = "pedra"; // Armazena a escolha do jogador
        console.log("pedra"); 
        escolhaComputador = Math.floor(Math.random()*3) + 1; // Faz operação de sorteio de números 1 a 3 com random
        // floor arredonda para baixo para não vir número quebrado
        selecaoComputador(); // Chama a função que seleciona a escolha para o computador
        marcarPontos(escolhaJogador,selecaoComputador()); // chama a função que decide o turno
        situacaoBtn(1,"off"); // Desligando o button desafiar
    }else if(opcaoTwo.checked){// Selecionado papel
        escolhaJogador = "papel";
        console.log("papel");
        escolhaComputador = Math.floor(Math.random()*3) + 1;
        selecaoComputador();
        marcarPontos(escolhaJogador,selecaoComputador());
        situacaoBtn(1,"off");
    }else{// Selecionado pesoura
        escolhaJogador = "tesoura";
        console.log("tesoura");
        escolhaComputador = Math.floor(Math.random()*3) + 1;
        selecaoComputador();
        marcarPontos(escolhaJogador,selecaoComputador());
        situacaoBtn(1,"off");
    }
}

const btnReset = document.querySelector('#botao-reiniciar').onclick = function (){ // Ao clicar nesse button reseta ao formato padrão da página
    opcaoOne.checked = false; // Desmarcando os inputs radio
    opcaoTwo.checked = false;
    opcaoThree.checked = false;
    ladoComputador.innerHTML = "Preparando Lance"; // Marcando espera do lance
    marcarPontos(0,1); // Situação especifica que zera o placares
    imagemEscolhaJogador.src = "img/tela-de-carregamento.gif"; // Coloca o gif até que seja feito o próximo lance
    imagemEscolhacomputador.src = "img/tela-de-carregamento.gif"; // Autor Wikimedia Commons - https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921
    resultado.innerHTML = "Desafie!";
    situacaoBtn(1,"on"); // Liga o button desafiar
}

const btnContinuar = document.querySelector('#botao-continuar').onclick = function (){
    rodadaAcabou = false; // Mostra que a rodada começou
    opcaoOne.checked = false; // Desmarcando os inputs radio
    opcaoTwo.checked = false;
    opcaoThree.checked = false;
    ladoComputador.innerHTML = "Preparando Lance";
    imagemEscolhaJogador.src = "img/tela-de-carregamento.gif";
    imagemEscolhacomputador.src = "img/tela-de-carregamento.gif";
    resultado.innerHTML = "Desafie!";
    situacaoBtn(1,"on");
}