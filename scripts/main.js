function tocaSom(idElementAudio){
  const elemento =  document.querySelector(idElementAudio);

  if( elemento != null  ){

    console.log("Elemento existe e emite som");
    elemento.play();
  } else {
    console.log('Elemento não existe!')
  }
}


const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0;contador < listaDeTeclas.length;contador++) {
  //loop => rotina  
  const tecla = listaDeTeclas[contador];
  const teclaClasseCSS = tecla.classList[1];
  const idAudio = `#som_${teclaClasseCSS}`;

  //console.log(teclaClasseCSS);

  tecla.onclick= function (){
    tocaSom(idAudio)
  };
  //console.log(contador);

tecla.onkeydown= function (evento){
  //console.log(evento.code)
  if(evento.code ==="Space" ||evento.code ==="Enter"){
    tecla.classList.add('ativa');
  }
  
}
tecla.onkeyup= function (){
  tecla.classList.remove('ativa');
}
}



