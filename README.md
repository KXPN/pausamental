# Pausa Mental

El código muestra letras aleatorias con guiones al inicio, fin o ambos (indicando que la letra debe estar al final, inicio o en cualquier otra posición dentro de la palabra, respectivamente)

## Ejecución

### Desde navegador
1. Haz clic en la barra de direcciones, en la parte superior del navegador
2. Elimina toda la dirección
3. Copia y pega esta palabra:
```
javascript
```
5. Escribe dos puntos (`:`)
6. Copia y pega este código:
```javascript
(()=>{let o=document,r=o.body,t=o.createElement.bind(o),n,l,e=r.appendChild(t("div")),i=e.appendChild(t("div")),s=e.appendChild(t("div")),a=e.appendChild(t("button"));Object.assign(e.style,{background:"black",fontFamily:"courier new",fontSize:"277px",left:0,top:0,width:"100%",position:"fixed",textAlign:"center",zIndex:99999}),i.innerText=60,Object.assign(i.style,{color:"red"}),s.innerText="*",Object.assign(s.style,{color:"green"}),s.ondblclick=()=>{clearInterval(n),e.remove()},a.innerText="Iniciar",Object.assign(a.style,{background:"#222",color:"black",fontFamily:"courier new",fontSize:"116px"}),a.onclick=()=>{e.t=Date.now()/1e3|0;let o=String.fromCharCode(65+Math.random()*26|0),t=Math.random()>.5?"-":"";s.innerText=t+o+(t?Math.random()>.5?"-":"":"-"),clearInterval(n),n=setInterval(()=>{let t=60-((Date.now()/1e3|0)-e.t);if(i.innerText=t,t)return;clearInterval(n);for(let e=0;e<2;e++)for(let t=0;t<4;t++)c(e+.16*t)})};function c(e){let n=new AudioContext,s=n.createGain(),t=n.createOscillator(),o=n.currentTime+e;s.gain.value=.2,s.connect(n.destination),t.type="sine",t.frequency.value=1e3,t.connect(s),t.start(o),t.stop(o+.15)}})()
```
PD: El código es una versión minificada del archivo `index.js` usando https://go.tacodewolff.nl/minify

### Desde consola
Puedes ejecutar el código del archivo `index.js` directamente en la consola de cualquier navegador
