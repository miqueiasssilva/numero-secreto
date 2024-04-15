// aula 3 
function calcularMedia(nota1,nota2,nota3,nota4) {
    let media = (nota1+nota2+nota3+nota4) / 4;
    return media;
  }
  
  function verificarAprovacao(media) {
    if (media >= 5) return 'Aprovado';
    else return 'Reprovado';
  }
  
  let media = calcularMedia(7,6,3,5);
  console.log('Media: ' + media + ' Resultado: ' + verificarAprovacao(media));
 // aula 2 
 

questao1();
 function questao2(nome) {
    console.log('Ola, '+ nome +'!' );
}

questao2('miqueias');
questao2('jonatas');

function questao3(numero) {
    return numero * 2;
}

console.log(questao3(4));

function questao4(x,y,z) {
    return (x+y+z) / 3;
}

console.log('media: '+questao4(3,4,5));

function questao5(x,y) {
    if (x>y) return x;
    else return y;
}

console.log('maior: '+ questao5(2,9));

function questao6(x) {
    return x * x ;
} console.log('resultado é ' + questao6(6)); 
 


function massaCorporal (altura,peso) {
    return peso / (altura * altura);
   }

   console.log(massaCorporal(1.90,76));

   function numeroFatorial (numero) {
    if(numero == 1) return 1;
    if(numero == 2) return 1*2;
    if(numero == 3) return 1*2*3;
    if(numero == 4) return 1*2*3*4;
   }

   console.log(numeroFatorial(3));


   function converterEmReal(valorEmDolar) {
    return valorEmDolar * 4.80;
   }

   console.log(converterEmReal(2));

   function salaRetangular(altura,largura) {
window.alert('perímetro: ' + perimetro(altura,largura)+' área: '+ calcularArea(altura,largura));

   }

   function perimetro(altura,largura) {
    return altura * 2 + largura *2;
   }
   
   function calcularArea(altura,largura) {
    return altura * largura;
   }

   salaRetangular(3,5);


   function salaCircular(pi,raio) {
    window.alert('A área é: '+ calcularArea(pi,raio)+' O perimetro é: '+ perimetro(pi,raio));
   }

    function calcularArea(pi,raio) {
return pi*(raio * raio);
    }

    function perimetro(pi,raio) {
        return 2*pi*raio
    }

    salaCircular(3,5);

    function tabuada(x) {
    console.log(x + ' x 1 = '+ x*1)
    console.log(x + ' x 2 = '+ x*2)
    console.log(x + ' x 3 = '+ x*3)
    console.log(x + ' x 4 = '+ x*4)
    console.log(x + ' x 5 = '+ x*5)
    console.log(x + ' x 6 = '+ x*6)
    console.log(x + ' x 7 = '+ x*7)
    console.log(x + ' x 8 = '+ x*8)
    console.log(x + ' x 9 = '+ x*9)
    console.log(x + ' x 10 = '+ x*10)

    } 

    tabuada(5);







    let listaGenerica = [];

  let listaDeProgramacao = [javaScript, C, C++, kotlin, Python];
  listaDeProgramacao.push(Java, Ruby, Golang);
  console.log (listaDeProgramacao); 

  let listaDeNomes = [joao, pedro, marcos];
  console.log(listaDeNomes[0]);

  let listaNumerica = [0, 1, 2];
  console.log(listaNumerica[1]);

  let listaAutomoveis = [carro, moto, onibus];
  console.log(listaAutomoveis[2]);






 