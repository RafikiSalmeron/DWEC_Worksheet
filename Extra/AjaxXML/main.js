var cont = 0;

window.onload = function () {
  setInterval(loadDoc, 5000);
}


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  var parser = new DOMParser();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      datos = parser.parseFromString(this.responseText, "text/xml");
      crearTabla(datos);
    }
  };

  xhttp.open("GET", "datos.xml", true);
  xhttp.send();
}


function crearTabla(data){
  document.write("<table border='1'>");
  for(let i = 0; i < data.getElementsByTagName("noticia").length; i++){
    document.write("<tr><td>" +  datos.getElementsByTagName("titulo")[i].childNodes[0].nodeValue +"</td><td>" +datos.getElementsByTagName("texto")[i].childNodes[0].nodeValue +"</td></tr>");
  }
  document.write("</table>");
}
