//Generando un class constructor de objetos valor
class valor{
    constructor(id,opcion,casa){
        this.id = id,
        this.opcion = opcion
        this.casa = casa
    }
}

const valores1 = new valor (1, "Valentia y fuerza", "Gyffindor")
const valores2 = new valor (2, "Justicia y lealtad", "Hufflepuff")
const valores3 = new valor (3, "Sabiduria y voluntad", "Ravenclaw")
const valores4 = new valor (4, "Ambicion y astucia", "Slytherin")

//Creando array VALORES
const VALORES = [valores1,valores2,valores3,valores4];

//Mostrando las opciones en el DOM
const cardValores = document.getElementById("cardValores")
VALORES.forEach((Valor => {
    let divCard = document.createElement ("div")
    divCard.id = Valor.id
    divCard.innerHTML = 
        `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title">${Valor.opcion}</h4>
          <input type="button" class="btn btn-primary" value="Me representan">
        </div>
      </div>`
    cardValores.append(divCard)
}))




