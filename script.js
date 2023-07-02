const cardValores = document.getElementById("cardValores")
const resultado = document.getElementById("resultado")
const resetear = document.getElementById("resetear")

//Dandole comportamiento al button
resetear.addEventListener("click", () => resetearJuego())

const valores1 = new Valor (1, "Valentía y fuerza", "Gryffindor", "Un buen miembro de Gryffindor tiene gran osadía, temple y caballerosidad. Son capaces de todo por defender en lo que creen y nunca se dan por vencidos. También son capaces de romper las reglas si es necesario y les encantan los retos, cuanto más difíciles, mejor. Se atreven a lo que la mayoría no se atreve. En cada obstáculo ven una oportunidad para demostrar quienes son realmente.", `gryffindor.png`)
const valores2 = new Valor (2, "Justicia y lealtad", "Hufflepuff", "Los hufflepuff son buenas personas y suelen caer bien a todo el mundo. Son pacientes, tolerantes y siempre harán todo de forma honrada, sin hacer trampas y respetando las reglas.", `hufflepuff.png`)
const valores3 = new Valor (3, "Sabiduría y voluntad", "Ravenclaw", "Los miembros de esta casa se caracterizan por su ingenio, aprendizaje, sabiduría y voluntad. El símbolo animal emblemático es el águila, y el azul y el bronce son sus colores.", `ravenclaw.png`)
const valores4 = new Valor (4, "Ambición y astucia", "Slytherin", "Los Slyhterin son personas que utilizan cualquier medio para lograr sus fines, poseen determinación, ambición, un cierto desdén por las normas, astucia, aspiraciones de grandeza y hambre de poder. Tienden a dudar antes de actuar, con el fin de sopesar todos los posibles resultados antes de decidir exactamente lo que se debe hacer y, una vez que lo averiguan, lo consiguen, dándole igual los medios para lograrlo.", `slytherin.png`)

//Creando array VALORES
const VALORES = [valores1,valores2,valores3,valores4];

//Mostrando opciones en el DOM
document.addEventListener("DOMContentLoaded", () => {
  llamarOpciones()
})

//Llamando al LS
document.addEventListener("DOMContentLoaded", () => {
  let resultadoLS = localStorage.getItem("resultadoCasa")
  verResultado(resultadoLS)
})















