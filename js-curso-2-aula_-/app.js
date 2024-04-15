 /*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'escolha um número entre 1 e 100'; */

let listaDeNumerosSorteados = [];
let numeroLimite = 100;


let numeroSecreto = gerarUmNumeroAleatorio();
let tentativas = 1;

function gerarUmNumeroAleatorio() {
 let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
 let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
     listaDeNumerosSorteados = [];
  }

 if (listaDeNumerosSorteados[numeroEscolhido]) {
     return gerarUmNumeroAleatorio();
 }   else {
     listaDeNumerosSorteados.push(numeroEscolhido);
     console.log(listaDeNumerosSorteados);
     return numeroEscolhido;
 }
}

exibirMensagemInicial();

function verificarChute() {
 let chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
     exibirTextoNaTela('h1' , 'Acertou!');
     let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativa = `Voce descubriu o numero secreto com ${tentativas} ${palavraTentativa}`;
     exibirTextoNaTela ('p' , mensagemTentativa);
     document.getElementById('reiniciar').removeAttribute('disabled');

  } else {
     if (chute > numeroSecreto) {
         exibirTextoNaTela('p' , 'O numero secreto é menor'); 
     }  else {
         exibirTextoNaTela('p', 'O numero secreto é maior');
     }    
     tentativas++
     limparCampo();

 }
}

function reiniciarJogo() {
 numeroSecreto = gerarUmNumeroAleatorio();
 limparCampo();
 tentativas = 1;
 exibirMensagemInicial();
 document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo() {
 chute = document.querySelector('input');
 chute.value = '';
}

function exibirTextoNaTela(tag, texto) {
 let campo = document.querySelector(tag);
 campo.innerHTML = texto;
 responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
 exibirTextoNaTela('h1' , 'Jogo do número secreto');
exibirTextoNaTela('p' , 'Escolha um número de 1 a 100');
}
