//Generando un class constructor de objetos valor
class Valor{
    constructor(id,opcion,casa,descripcion,logo){
        this.id = id,
        this.opcion = opcion,
        this.casa = casa,
        this.descripcion = descripcion,
        this.logo = logo
    }
}

const valores1 = new Valor (1, "Valentia y fuerza", "Gryffindor", "Un buen miembro de Gryffindor tiene gran osadía, temple y caballerosidad. Son capaces de todo por defender en lo que creen y nunca se dan por vencidos. También son capaces de romper las reglas si es necesario y les encantan los retos, cuanto más difíciles, mejor. Se atreven a lo que la mayoría no se atreve. En cada obstáculo ven una oportunidad para demostrar quienes son realmente.", `gryffindor.png`)
const valores2 = new Valor (2, "Justicia y lealtad", "Hufflepuff", "Los hufflepuff son buenas personas y suelen caer bien a todo el mundo. Son pacientes, tolerantes y siempre harán todo de forma honrada, sin hacer trampas y respetando las reglas.", `hufflepuff.png`)
const valores3 = new Valor (3, "Sabiduria y voluntad", "Ravenclaw", "Los miembros de esta casa se caracterizan por su ingenio, aprendizaje, sabiduríay voluntad. El símbolo animal emblemático es el águila, y el azul y el bronce son sus colores.", `ravenclaw.png`)
const valores4 = new Valor (4, "Ambicion y astucia", "Slytherin", "Los Slyhterin son personas que utilizan cualquier medio para lograr sus fines, poseen determinación, ambición, un cierto desdén por las normas, astucia, aspiraciones de grandeza y hambre de poder. Tienden a dudar antes de actuar, con el fin de sopesar todos los posibles resultados antes de decidir exactamente lo que se debe hacer y, una vez que lo averiguan, lo consiguen, dándole igual los medios para lograrlo.", `slytherin.png`)

//Creando array VALORES
const VALORES = [valores1,valores2,valores3,valores4];

//Mostrando las opciones en el DOM
const cardValores = document.getElementById("cardValores")
VALORES.forEach((valor => {
    let divCard = document.createElement ("div")
    divCard.innerHTML = 
        `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title">${valor.opcion}</h4>
          <input type="button" class="btn btn-primary" value="Me representan" onclick="verResultado('${valor.casa}')" >
        </div>
      </div>`
    cardValores.append(divCard)
}))

//Funcion para mostrar el resultado
function verResultado(opcion){
  const resultado = document.getElementById("resultado")
  VALORES.forEach((Resultado => {
    if (Resultado.casa == opcion){
      localStorage.setItem("resultadoCasa", opcion)
      let divResultado = document.createElement ("divR")
      divResultado.innerHTML =
          `<div class="card" style="width: 18rem;">
          <div class="card-body">
            <h6> Encajas perfectamente en la casa:</h6>
            <h4 class="card-title">${Resultado.casa}</h4>
            <img src="./logos/${Resultado.logo}" class="logo" alt="logo gryffindor">
            <p>${Resultado.descripcion}</p>
            
          </div>
        </div>`
      resultado.append(divResultado)
      
    }
  }))
}

document.addEventListener("DOMContentLoaded", () => {
  let resultadoLS = localStorage.getItem("resultadoCasa")
  verResultado(resultadoLS)
})













