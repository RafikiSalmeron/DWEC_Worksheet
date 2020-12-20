// 1) Captura el evento onClick del ratón para que cada vez que suceda se ejecute un alert.
/*
onclick = function(){
  alert("Alert al clicar con el ratón");
}
*/
// 2) Captura el movimiento del ratón, para que se muestre la posición en la que se
// encuentra en cada momento
/*
function coords(coord){
  var x = coord.clientX;
  var y = coord.clientY;
  document.getElementById("label").innerHTML = "X : " + x + "  Y : " + y;
}
*/
/* 4)Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratón
en dos colores diferentes. Para ello primero simularemos que disponemos de un
canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño
(100x100 puede valer). Tu programa creará ese canvas una vez cargada la página
(onLoad). Lo siguiente será detectar el movimiento del ratón sobre las celdas para
pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente la
tecla Ctrl y azul si se pulsa Shift. En otro caso no deberá pintarse nada.
*/
/*
function tabla(){
	document.write("<table onclick=this.bgColor>");
	for(var i = 0; i<100; i++){
		document.write("<tr>");
		for(var j = 0; j<100; j++){
			document.write("<td onmousemove=\"this.bgColor=pintar()\">1</td>");
		}
		document.write("</tr>");
	}
}
function pintar(){
	return tecla(window.event);;
}

function tecla(event){
	if (event.ctrlKey){
		return "red";
	}else if(event.shiftKey){
		return "blue";
	}else{
		return "white";
	}
}

*/

/*9. Crea una página web que haciendo uso de eventos permita arrastrar una imagen
haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto
el botón).
<img onmousedown="pinchar(event)" src="https://i.pinimg.com/originals/70/d8/e2/70d8e2905ff447ab7138ca2dbd628119.png" width="100" height="100" id="ball">


function pinchar(evento){
  var valor = evento.target.id;
  id = document.getElementById(valor);
  id.style.position = 'absolute';
  id.style.zIndex = 5000;

  document.body.append(id);

  function moveAt(pageX, pageY) {
    id.style.left = pageX - id.offsetWidth / 2 + 'px';
    id.style.top = pageY - id.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  id.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    id.onmouseup = null;
  };

  id.ondragstart = function() {
    return false;
  };
};

*/

/*10.Mejora el ejercicio anterior para que se pueda hacer en una página con un número
cualquiera de imágenes.
<img onmousedown="pinchar(event)" src="https://i.pinimg.com/originals/70/d8/e2/70d8e2905ff447ab7138ca2dbd628119.png" width="100" height="100" id="ball">
<img onmousedown="pinchar(event)" src="https://i.pinimg.com/originals/70/d8/e2/70d8e2905ff447ab7138ca2dbd628119.png" width="100" height="100" id="ball2">
<img onmousedown="pinchar(event)" src="https://i.pinimg.com/originals/70/d8/e2/70d8e2905ff447ab7138ca2dbd628119.png" width="100" height="100" id="ball25">
<img onmousedown="pinchar(event)" src="https://i.pinimg.com/originals/70/d8/e2/70d8e2905ff447ab7138ca2dbd628119.png" width="100" height="100" id="ball3">
<img onmousedown="pinchar(event)" src="https://i.pinimg.com/originals/70/d8/e2/70d8e2905ff447ab7138ca2dbd628119.png" width="100" height="100" id="ball4">
<img onmousedown="pinchar(event)" src="https://i.pinimg.com/originals/70/d8/e2/70d8e2905ff447ab7138ca2dbd628119.png" width="100" height="100" id="ball5">
*/

function pinchar(evento) {
  var valor = evento.target.id;
  id = document.getElementById(valor);
  id.style.position = 'absolute';
  id.style.zIndex = 500;

  document.body.append(id);

  function moveAt(pageX, pageY) {
    id.style.left = pageX - id.offsetWidth / 2 + 'px';
    id.style.top = pageY - id.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  id.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    id.onmouseup = null;
  };

  id.ondragstart = function() {
    return false;
  };
};
