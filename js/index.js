const botonVer = document.getElementById('botonVer');
const presentacion = document.getElementById('presentation')
const planoColegio = document.getElementById('planoColegio')
const plano = document.getElementById('plano')
botonVer.addEventListener("click",(e)=>{
    presentacion.classList.add('hidden')
    if(planoColegio.classList.contains('hidden')){
        planoColegio.classList.remove('hidden')
    }
})


const posicionesEnBlanco = [1,5,6,9,10,13,14,17,18,21,22,25,26];
const posicionAzul = [0,1,2,3,4,7,8,12,15,16,20,23,24,27,28,29,30,31,32,33,34,35,36]

const cuadros = document.querySelectorAll(".aulas");
posicionesEnBlanco.forEach((posicion) => {
  cuadros[posicion - 1].classList.add("fondoBlanco");
});



