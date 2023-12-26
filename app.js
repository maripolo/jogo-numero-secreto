let listaDeNumeros = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;
let 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2})
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas> 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute >numeroSecreto){
            exibirTextoNaTela('p', 'o número secreto é menor que o chute');
        } else {
        exibirTextoNaTela('p', 'O número secreto é maior');
    } 
    tentativas++;
    limparCampo();
    }
    
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeros.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumeros =[];
    }
    if(listaDeNumeros.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumeros.push(numeroEscolhido);
        console.log (listaDeNumeros);
        return numeroEscolhido;
    }
}

function limparCampo (){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById ('reiniciar').setAttribute('disabled',true);
}












