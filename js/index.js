const botonVer = document.getElementById('botonVer');
const presentacion = document.getElementById('presentation')
const planoColegio = document.getElementById('planoColegio')
const plano = document.getElementById('plano')
const main = document.getElementById('main');
botonVer.addEventListener("click",(e)=>{
    presentacion.classList.add('hidden')
    if(planoColegio.classList.contains('hidden')){
        planoColegio.classList.remove('hidden')
        main.style.backgroundColor = "white "
    }
})




const posicionesEnBlanco = [1,5,6,9,10,13,14,17,18,21,22,25,26];
const posicionAzul = [0,1,2,3,4,7,8,12,15,16,20,23,24,27,28,29,30,31,32,33,34,35,36]
const indexes = [30,29,28,33,34]
const cuadros = document.querySelectorAll(".aulas");
cuadros.forEach((aula,index )=>{
  aula.classList.add("a"+index)

  if(index % 2 !== 0){


    indexes.forEach(a => a !== index ?  aula.classList.add("margen"): aula.classList.add("no-margen") )
  }
});
posicionesEnBlanco.forEach((posicion) => {
  let cont = 0;
   cont = cont +1;
  cuadros[posicion - 1].classList.add("fondoBlanco");
  
});




const aulasAcceso = document.querySelectorAll(".acceso");

aulasAcceso.forEach( aula => {
  aula.addEventListener("click", (e)=>{
    e.stopPropagation();
    if(!e.target.id){
      console.log(e.target.parentElement.id);

    }
    else{
      console.log(e.target.id);
    }

  })
})


