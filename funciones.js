//Funcion para mostrar las opciones en el DOM
function renderizarOpciones(){
    VALORES.forEach((valor => {
      let divCard = document.createElement ("div")
      divCard.innerHTML = 
          `<div class="card" style="width: 18rem;">
          <div class="card-body">
            <h4 class="card-title">${valor.opcion}</h4>
            <input type="button" class="boton" value="Me representan" onclick="verResultado('${valor.casa}')" >
          </div>
        </div>`
      cardValores.append(divCard)
      
    }))
}
  

//Funcion para mostrar el resultado y guardar el resultado en el LS
function verResultado(opcion){
    VALORES.forEach((Resultado => {
      if (Resultado.casa == opcion){
        localStorage.setItem("resultadoCasa", opcion)
        let divResultado = document.createElement ("divR")
        divResultado.innerHTML =
            `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h6> Encajas perfectamente en la casa:</h6>
              <h4 class="card-title">${Resultado.casa}</h4>
              <img src="./logos/${Resultado.logo}" class="logo" alt="logo de la casa">
              <p>${Resultado.descripcion}</p>
            </div>
          </div>`
        resultado.append(divResultado)
        mostrarALert()
      }
    }))
}

//Funcion para incorporar sweet alert
function mostrarALert(){
    Swal.fire({
        title: "¡Encontramos la casa perfecta para vos!",
        text: "A continuación vas a poder ver el resultado",
        confirmButtonText: "Conocer resultado",
        icon:"success"
    })
}

//Llamado fetch
function llamarOpciones(){
    fetch("./valores.json")
    .then(res => res.json())
    .then(data => renderizarOpciones(data))
}

//Funcion para resetear el LS asi se puede volver a realizar el juego
  function resetearJuego(){
    localStorage.removeItem("resultadoCasa")
    location.reload()
}