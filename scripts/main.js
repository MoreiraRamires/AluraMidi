function tocaSom(idElementAudio){
  document.querySelector(idElementAudio).play();

}
const listaDeTeclas = document.querySelectorAll('.tecla');



let contador = 0 ;

//enquanto 



while (contador < listaDeTeclas.length) {
  //loop => rotina  
  const tecla = listaDeTeclas[contador];
  const teclaClasseCSS = tecla.classList[1];
  const idAudio = `#som_${teclaClasseCSS}`;

  console.log(teclaClasseCSS);

  tecla.onclick= function (){
    tocaSom(idAudio)
  };

  contador= contador+1;
  console.log(contador);
}

