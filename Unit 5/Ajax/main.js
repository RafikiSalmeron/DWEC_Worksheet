function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      res = JSON.parse(this.responseText);
      console.log(res);
      for (var i = 0; i < res.listanotas[0].notas.length; i++) {
        console.log(res.listanotas[0].notas[i].mensaje);
      }
    }
  };

  xhttp.open("GET", "notas.txt", true);
  xhttp.send();
}
