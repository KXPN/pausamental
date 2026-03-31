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
(()=>{let e=document.createElement("div");document.body.appendChild(e),e.className="jsPausaMental",i(e,{background:"black","font-family":"courier new","font-size":"277px",left:"0",position:"fixed","text-align":"center",top:"0",width:"100%","z-index":"99999"});let n=document.createElement("div");e.appendChild(n),n.className="jsPausaMentalContador",n.innerText="60",i(n,{color:"red"});let t=document.createElement("div");e.appendChild(t),t.addEventListener("dblclick",d),t.className="jsPausaMentalRegla",t.innerText="*",i(t,{color:"green"});let s=document.createElement("button");e.appendChild(s),s.innerText="Iniciar",s.addEventListener("click",r),i(s,{background:"#222",color:"black","font-family":"courier new","font-size":"116px"});let o;function i(e,t){for(let n in t){let s=t[n];e.style[n]=s}}function r(){let e=document.querySelector(".jsPausaMental");e.inicioUnixTiempo=Math.floor((new Date).getTime()/1e3);let n=document.querySelector(".jsPausaMentalRegla"),s=a(26),i=String.fromCharCode(65+s),t=a(2)?"-":"",r=t+i+(t?a(2)?"-":"":"-");n.innerText=r,clearInterval(o),e.animacion&&e.animacion.cancel(),o=setInterval(c)}function a(e){const s=Math.ceil(e/256),n=new Uint8Array(s);let t=0;do crypto.getRandomValues(n),t=0,n.forEach(e=>{t+=e});while(t>=e)return t}function c(){let t=document.querySelector(".jsPausaMental"),e=60-(Math.floor((new Date).getTime()/1e3)-t.inicioUnixTiempo);if(e<0&&(e=0),document.querySelector(".jsPausaMentalContador").innerText=e,e)return;t.animacion=t.animate([{background:"rgba(255, 100, 0, 1)"},{background:"rgba(255, 127, 0, 1)"},{background:"rgba(255, 100, 0, 1)"}],{duration:500,iterations:1/0}),clearInterval(o);for(let e=0;e<2;e++)for(let t=0;t<4;t++)l(e+.16*t)}function l(e){let n=new AudioContext,s=n.createGain();s.gain.value=.2,s.connect(n.destination);let t=n.createOscillator();t.type="sine",t.frequency.value=1e3,t.connect(s);let o=n.currentTime+e;t.start(o),t.stop(o+.15)}function d(){clearInterval(o),document.querySelector(".jsPausaMental").remove()}})()
```

### Desde consola
Puedes ejecutar el código del archivo [index.js](index.js) directamente en la consola de cualquier navegador

## Uso

1. Haz clic en el botón `Iniciar` para mostrar la regla (texto verde) e iniciar el tiempo
2. Al final del tiempo se emitirá un sonido y la pantalla titilará
3. Para salir, puedes hacer doble clic en el texto verde
