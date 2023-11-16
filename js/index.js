const botonVer = document.getElementById('botonVer');
const presentacion = document.getElementById('presentation')
const planoColegio = document.getElementById('planoColegio')
const plano = document.getElementById('plano')
const main = document.getElementById('main');
const modal = document.querySelector(".modal-container")
const modalButton = document.querySelector("#close-button")
const modalTitle = document.querySelector("#modal-title")
const modalDesc = document.querySelector("#modal-desc")
const modalImg = document.querySelector("#speciality-img")
botonVer.addEventListener("click",(e)=>{
    presentacion.classList.add('hidden')
    if(planoColegio.classList.contains('hidden')){
        planoColegio.classList.remove('hidden')
        main.style.backgroundColor = "white "
    }
})

const salas = {
  tt:"Tt",
  te:"Te",
  si:"Si",
  se:"Se",
  ta:"Ta",
  a1:"aula1",
  a2:"aula2",
  a6:"aula6",
  a9:"aula9",
  a10:"aula10",
  a12:"aula12",
  bm:"BM",
  bv:"BV",
  l:"Laboratorio"
}



modalButton.addEventListener("click", () =>{
  modal.classList.add("hidden");
})
const posicionesEnBlanco = [1,5,6,9,10,13,14,17,18,21,22,25,26];
const posicionAzul = [0,1,2,3,4,7,8,12,15,16,20,23,24,27,28,29,30,31,32,33,34,35,36]
const indexes = [30,29,28,33,34]
const cuadros = document.querySelectorAll(".aulas");
cuadros.forEach((aula,index )=>{
  aula.classList.add("a"+index)


  switch (index) {
    case 32:
        aula.classList.add("margen-top")
      break;
    case 33:
        aula.classList.add("margen-top")
      break;
    case 34:
        aula.classList.add("margen-top")
      break;
  
    default:
      break;
  }
  if(index % 2 !== 0 && index !== 33 ){


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
        case salas.tt:
          modalTitle.innerHTML= "Taller Torneria"
          modalDesc.innerHTML="En este taller podrás encontrar los proyectos que los estudiantes realizaron con tornos."
          modalImg.setAttribute("src","../images/torneria.jpg")
          break;
        case salas.te:
          modalTitle.innerHTML= "Taller Electromecánica"
          modalDesc.innerHTML="En este taller podrás encontrar los proyectos realizados por los estudiantes de la especialidad de Equipos e Instalaciones Electromecánicas"
          modalImg.setAttribute("src","../images/Taller-Electromecanico-KRCP-10.jpg")
          break;
        case salas.ta:
          modalTitle.innerHTML= "Taller Automotores"
          modalDesc.innerHTML="En este taller podrás encontrar los proyectos realizados por los estudiantes de la especialidad de Automotores."
          modalImg.setAttribute("src","../images/automotor.jpg")
          break;
        case salas.si:
          modalTitle.innerHTML= "Sala de Informática"
          modalDesc.innerHTML="En este laboratorio podras observar los proyectos realizados por los estudiantes de la especialidad de Informática."
          modalImg.setAttribute("src","../images/sala informática 2.jpg")
          break;

        case salas.se:
          modalTitle.innerHTML= "Sala de Electromecánica"
          modalDesc.innerHTML="En esta sala estarán expuestos algunos de  los proyectos que realizaron los estudiantes de la especialidad de Electromecánica"
          modalImg.setAttribute("src","../images/AulaTaller-Electricidad.jpg")
          break;
          case salas.l:
            modalTitle.innerHTML= "Laboratorio"
            modalDesc.innerHTML="En este laboratorio se encuentran diversos proyectos de ciencias naturales."
            modalImg.setAttribute("src","../images/curso-laboratorio-clinico-300x300.jpg")
          break;
          case salas.a6:
            modalTitle.innerHTML= "Aula 6 - Informática"
            modalDesc.innerHTML="En esta aula se encuentran diversos proyectos de los estudiantes de Informática."
            modalImg.setAttribute("src","../images/funciones-de-la-computadora-1.jpeg")
          break;
          case salas.a9:
            modalTitle.innerHTML= "Aula 9 - Lengua y Matemática"
            modalDesc.innerHTML="En esta aula se encuentran diversos proyectos de las asignaturas de Lengua y Matemáticas realizados por nuestros estudiantes."
            modalImg.setAttribute("src","../images/mate-y-lengua.jpg")
          break;
          case salas.a10:
            modalTitle.innerHTML= "Aula 10 - Ciencias Naturales"
            modalDesc.innerHTML="En esta aula se encuentran diversos proyectos de la asignatura Ciencia Naturales realizados por nuestros estudiantes."
            modalImg.setAttribute("src","../images/imagen_web_0.jpg")
          break;
      
          case salas.a12:
            modalTitle.innerHTML= "Aula 12 - Ciencias Naturales"
            modalDesc.innerHTML="En esta aula se encuentran diversos proyectos de la asignatura Ciencia Naturales realizados por nuestros estudiantes."
            modalImg.setAttribute("src","../images/imagen_web_0.jpg")
          break;
          case salas.a1:
            modalTitle.innerHTML= "Aula 1 - Ciencias Sociales"
            modalDesc.innerHTML="En esta aula se encuentran diversos proyectos de la asignatura Ciencia Sociales realizados por nuestros estudiantes."
            modalImg.setAttribute("src","../images/mundo-libro.jpeg")
          break;
          case salas.a2:
            modalTitle.innerHTML= "Aula 2 - Economía"
            modalDesc.innerHTML="En esta aula se encuentran diversos proyectos realizados por nuestros estudiantes de la especialidad Economia."
            modalImg.setAttribute("src","../images/aguirre-premio-nobel-economia.jpg")
          break;
          case salas.bv:
            modalTitle.innerHTML= "Baños de varones"
            modalDesc.innerHTML="Estos son los baños de hombres, puedes usarlos para hacer tus necesidades."
            modalImg.setAttribute("src","../images/baño-hombres.png")
          break;
          case salas.bm:
            modalTitle.innerHTML= "Baño de mujeres"
            modalDesc.innerHTML="Estos son los baños de mujeres, puedes usarlos para hacer tus necesidades."
            modalImg.setAttribute("src","../images/baño-mujeres.png")
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


