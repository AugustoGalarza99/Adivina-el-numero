//Función para generar un número aleatorio entre 1 y 100
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

// Función del juego
    function jugarAdivinanza() {
    const numeroAleatorio = generarNumeroAleatorio();
    let intentos = 0;
    let numeroAdivinado = false;

    alert("Adivina el número secreto entre 1 y 100.");

    while (!numeroAdivinado) {
        const intento = parseInt(prompt("Ingresa tu adivinanza:"));
            if (isNaN(intento)) {
            alert("Por favor, ingresa un número válido.");
        } else {
        intentos++;

        if (intento < numeroAleatorio) {
          alert("El número es mayor.");
        } else if (intento > numeroAleatorio) {
          alert("El número es menor.");
        } else {
          alert("¡Correcto! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.");
          numeroAdivinado = true;
        }
      }
    }
  }
  
//Iniciar el juego
    jugarAdivinanza();