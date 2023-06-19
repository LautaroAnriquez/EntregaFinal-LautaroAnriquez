//Generando un class constructor de objetos valor
class Valor{
    constructor(id,opcion,casa){
        this.id = id,
        this.opcion = opcion,
        this.casa = casa
    }
}

const valores1 = new Valor (1, "Valentia y fuerza", "Gryffindor")
const valores2 = new Valor (2, "Justicia y lealtad", "Hufflepuff")
const valores3 = new Valor (3, "Sabiduria y voluntad", "Ravenclaw")
const valores4 = new Valor (4, "Ambicion y astucia", "Slytherin")

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
            <h5 class="card-title">${Resultado.casa}</h5>
          </div>
        </div>`
      resultado.append(divResultado)
    }
  }))
}

let resultadoLS = localStorage.getItem("resultadoCasa")









