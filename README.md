# Pausa Mental

Facilita la propuesta de letras aleatorias dentro de un tiempo, para que hagas algún tipo de juego

## Ejecución

Se puede ejecutar directamente en el navegador

### Sin abrir algo adicional
1. Haz clic en la barra de direcciones, en la parte superior del navegador
2. Elimina toda la dirección
3. Copia y pega esta palabra:
```
javascript
```
5. Escribe dos puntos (`:`)
6. Copia y pega este código (una versión minificada del archivo [index.js](index.js) usando https://go.tacodewolff.nl/minify):
```javascript
(()=>{const l=60;let e=document.createElement("div");document.body.appendChild(e),e.className="jsPausaMental",a(e,{background:"black","font-family":"courier new","font-size":"277px",left:"0",position:"fixed","text-align":"center",top:"0",width:"100%","z-index":"99999"});let s=document.createElement("div");e.appendChild(s),s.className="jsPausaMentalContador",s.innerText="60",a(s,{color:"red"});let t=document.createElement("div");e.appendChild(t),t.addEventListener("dblclick",m),t.className="jsPausaMentalRegla",t.innerText="*",a(t,{color:"green"});let o=document.createElement("button");e.appendChild(o),o.innerText="Iniciar",o.addEventListener("click",d),a(o,{background:"#222",color:"black","font-family":"courier new","font-size":"116px"});let i=new AudioContext,n,c={};function a(e,t){for(let n in t){let s=t[n];e.style[n]=s}}function d(){let t=document.querySelector(".jsPausaMental");t.inicioUnixTiempo=Math.floor((new Date).getTime()/1e3);let s=document.querySelector(".jsPausaMentalRegla"),e="",o={"W-":!0,"X-":!0,"-K-":!0,"-W-":!0,"-B":!0,"-C":!0,"-F":!0,"-G":!0,"-H":!0,"-J":!0,"-K":!0,"-M":!0,"-P":!0,"-Q":!0,"-T":!0,"-V":!0,"-W":!0,"-X":!0};for(;!0;){let n=r(26),s=String.fromCharCode(65+n),t=r(2)?"-":"";if(e=t+s+(t?r(2)?"-":"":"-"),c[e]||o[e])continue;c[e]=!0;break}s.innerText=e,clearInterval(n),t.animacion&&t.animacion.cancel(),n=setInterval(u)}function r(e){const s=Math.ceil(e/256),n=new Uint8Array(s);let t=0;do crypto.getRandomValues(n),t=0,n.forEach(e=>{t+=e});while(t>=e)return t}function u(){let t=document.querySelector(".jsPausaMental"),e=l-(Math.floor((new Date).getTime()/1e3)-t.inicioUnixTiempo);if(e<0&&(e=0),document.querySelector(".jsPausaMentalContador").innerText=e,e)return;t.animacion=t.animate([{background:"rgba(255, 100, 0, 1)"},{background:"rgba(255, 127, 0, 1)"},{background:"rgba(255, 100, 0, 1)"}],{duration:500,iterations:1/0}),clearInterval(n);for(let e=0;e<2;e++)for(let t=0;t<4;t++)h(e+.16*t)}function h(e){let n=i.createGain();n.gain.value=.2,n.connect(i.destination);let t=i.createOscillator();t.type="sine",t.frequency.value=1e3,t.connect(n);let s=i.currentTime+e;t.start(s),t.stop(s+.15)}function m(){clearInterval(n),document.querySelector(".jsPausaMental").remove()}})()
```

### Desde consola
Puedes ejecutar el código del archivo [index.js](index.js) directamente en la consola de cualquier navegador

## Uso

1. Haz clic en el botón `Iniciar` para mostrar la regla (texto verde) e iniciar el tiempo
2. Al final del tiempo se emitirá un sonido y la pantalla titilará
3. Para salir, puedes hacer doble clic en el texto verde
