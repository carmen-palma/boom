function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 3) + 1;
  }
   console.log()
   
  function iniciarJuego() {
    const entradaUsuario = document.getElementById('userInput');
    const cuentaRegresiva = document.getElementById('countdown');
    const resultado = document.getElementById('result');
    const botonReinicio = document.getElementById('restart');
    let numeroAleatorio = generarNumeroAleatorio();
    let contadorRegresivo = 5;
  
    entradaUsuario.disabled = true;
    botonReinicio.disabled = true;
  
    const intervalo = setInterval(() => {
      cuentaRegresiva.textContent = contadorRegresivo;
      contadorRegresivo--;
  
      if (contadorRegresivo < 0) {
        clearInterval(intervalo);
  
        const numeroUsuario = parseInt(entradaUsuario.value);
        resultado.textContent = `Número elegido: ${numeroUsuario}, Número correcto: ${numeroAleatorio}. `;
  
        if (numeroUsuario === numeroAleatorio) {
          resultado.textContent += '¡Has salvado el mundo!';
        } else {
          resultado.textContent += 'La bomba ha estallado.';
        }
  
        entradaUsuario.disabled = false;
        botonReinicio.disabled = false;
      }
    }, 1000);
  }
    


  function reiniciarJuego() {
    const entradaUsuario = document.getElementById('userInput');
    const cuentaRegresiva = document.getElementById('countdown');
    const resultado = document.getElementById('result');
  
    entradaUsuario.value = '';
    cuentaRegresiva.textContent = '';
    resultado.textContent = '';
  

    iniciarJuego();
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    const botonReinicio = document.getElementById('restart');
    botonReinicio.addEventListener('click', reiniciarJuego);
  
    iniciarJuego();
  });