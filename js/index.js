const botonVer = document.getElementById('botonVer');
const presentacion = document.getElementById('presentation')
const planoColegio = document.getElementById('planoColegio')
const plano = document.getElementById('plano')
const main = document.getElementById('main');
const modal = document.querySelector(".modal-container")
const modalButton = document.querySelector("#close-button")
const modalTitle = document.querySelector("#modal-title")
const modalDesc = document.querySelector("#modal-desc")
botonVer.addEventListener("click",(e)=>{
    presentacion.classList.add('hidden')
    if(planoColegio.classList.contains('hidden')){
        planoColegio.classList.remove('hidden')
        main.style.backgroundColor = "white "
    }
})



modalButton.addEventListener("click", () =>{
  modal.classList.add("hidden");
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
    if(!e.target.id && e.target.parentElement.classList.contains("acceso")){
      console.log(e.target.parentElement.id);

      modal.classList.remove("hidden")

      switch (e.target.parentElement.id) {
        case "Tt":
          modalTitle.innerHTML= "Taller Torneria"
          modalDesc.innerHTML="En este taller podrás encontrar los proyectos que los estudiantes realizaron con tornos."
          break;
        case "Te":
          modalTitle.innerHTML= "Taller Electromecánica"
          modalDesc.innerHTML="En este taller podrás encontrar los proyectos realizados por los estudiantes de la especialidad de Equipos e Instalaciones Electromecánicas"
          break;
        case "Ta":
          modalTitle.innerHTML= "Taller Automotores"
          modalDesc.innerHTML="En este taller podrás encontrar los proyectos realizados por los estudiantes de la especialidad de Automotores."
          break;
        case "Si":
          modalTitle.innerHTML= "Sala de Informática"
          modalDesc.innerHTML="En este laboratorio podras observar los proyectos realizados por los estudiantes de la especialidad de Informática."
          break;
      
        default:
          break;
      }



    }
    else{
      console.log(e.target.id);
      modal.classList.remove("hidden")
    }

  })
})


