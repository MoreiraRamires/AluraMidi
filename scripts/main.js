function tocaSom(idElementAudio){
  document.querySelector(idElementAudio).play();

}
const listaDeTeclas = document.querySelectorAll('.tecla');




for (let contador = 0;contador < listaDeTeclas.length;contador++) {
  //loop => rotina  
  const tecla = listaDeTeclas[contador];
  const teclaClasseCSS = tecla.classList[1];
  const idAudio = `#som_${teclaClasseCSS}`;

  console.log(teclaClasseCSS);

  tecla.onclick= function (){
    tocaSom(idAudio)
  };
  console.log(contador);
}



