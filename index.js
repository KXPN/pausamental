(() => {
  let pausaMentalNode = document.createElement('div');
  document.body.appendChild(pausaMentalNode);
  pausaMentalNode.className = 'jsPausaMental';
  estilizar(
    pausaMentalNode,
    {
      'background': 'black',
      'font-family': 'courier new',
      'font-size': '277px',
      'left': '0',
      'position': 'fixed',
      'text-align': 'center',
      'top': '0',
      'width': '100%',
      'z-index': '99999',
    }
  );

  let contadorNode = document.createElement('div');
  pausaMentalNode.appendChild(contadorNode);
  contadorNode.className = 'jsPausaMentalContador';
  contadorNode.innerText = '60';
  estilizar(contadorNode, {'color': 'red'});

  let reglaNode = document.createElement('div');
  pausaMentalNode.appendChild(reglaNode);
  reglaNode.addEventListener('dblclick', finalizar);
  reglaNode.className = 'jsPausaMentalRegla';
  reglaNode.innerText = '*';
  estilizar(reglaNode, {'color': 'green'});

  let botonNode = document.createElement('button');
  pausaMentalNode.appendChild(botonNode);
  botonNode.innerText = 'Iniciar';
  botonNode.addEventListener('click', iniciar);
  estilizar(
    botonNode,
    {
      'background': '#222',
      'color': 'black',
      'font-family': 'courier new',
      'font-size': '116px',
    }
  );
  let verificacionIntervalo;

  function estilizar(elementoNode, valorPorPropiedad) {
    for (let propiedad in valorPorPropiedad) {
      let valor = valorPorPropiedad[propiedad];
      elementoNode.style[propiedad] = valor;
    }
  }

  function iniciar() {
    let pausaMentalNode = document.querySelector('.jsPausaMental');
    pausaMentalNode.inicioUnixTiempo = Math.floor(new Date().getTime() / 1000);
    let pausaMentalReglaNode = document.querySelector('.jsPausaMentalRegla');
    let letraNumero = obtenerNumeroDe0ANoIncluido(26);
    let letra = String.fromCharCode(65 + letraNumero);
    let reglaInicio = (obtenerNumeroDe0ANoIncluido(2) ? '-' : '');
    let regla = (
      reglaInicio +
      letra +
      (reglaInicio ? (obtenerNumeroDe0ANoIncluido(2) ? '-' : '') : '-')
    );
    pausaMentalReglaNode.innerText = regla;
    clearInterval(verificacionIntervalo);
    if (pausaMentalNode.animacion) {
      pausaMentalNode.animacion.cancel();
    }
    verificacionIntervalo = setInterval(verificarFin);
  }

  function obtenerNumeroDe0ANoIncluido(maximoNoIncluido) {
    const bytesCantidad = Math.ceil(maximoNoIncluido / 256);
    const numeros = new Uint8Array(bytesCantidad);
    let suma = 0;
    do {
      crypto.getRandomValues(numeros);
      suma = 0;
      numeros.forEach((numero) => {suma += numero;});
    } while (suma >= maximoNoIncluido);
    return suma;
  }

  function verificarFin() {
    let pausaMentalNode = document.querySelector('.jsPausaMental');
    let contadorValor = (
      60 -
      (
        Math.floor(new Date().getTime() / 1000) -
        pausaMentalNode.inicioUnixTiempo
      )
    );
    if (contadorValor < 0) {
      contadorValor = 0;
    }
    document.querySelector('.jsPausaMentalContador').innerText = contadorValor;
    if (contadorValor) {
      return;
    }
    pausaMentalNode.animacion = (
      pausaMentalNode
      .animate(
        [
          {background: 'rgba(255, 100, 0, 1)'},
          {background: 'rgba(255, 127, 0, 1)'},
          {background: 'rgba(255, 100, 0, 1)'},
        ],
        {
          duration: 500,
          iterations: Infinity,
        }
      )
    );
    clearInterval(verificacionIntervalo);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 4; j++) {
        pitar(i + (0.16 * j));
      }
    }
  }

  function pitar(inicioTiempoSegundosCantidad) {
    let audioContext = new AudioContext();

    let gainNode = audioContext.createGain();
    gainNode.gain.value = 0.2;
    gainNode.connect(audioContext.destination);

    let oscillatorNode = audioContext.createOscillator();
    oscillatorNode.type = 'sine';
    oscillatorNode.frequency.value = 1000;

    oscillatorNode.connect(gainNode);

    let inicio = (audioContext.currentTime + inicioTiempoSegundosCantidad);
    oscillatorNode.start(inicio);
    oscillatorNode.stop(inicio + 0.15);
  }

  function finalizar() {
    clearInterval(verificacionIntervalo);
    document.querySelector('.jsPausaMental').remove();
  }
})();
