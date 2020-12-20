document.cookie = "name=Rafiki";
document.cookie = "apellido=Salmeron; max-age=50";
function alertCookie() {
  alert(document.cookie);
}

//funcion para saber si existe una cookie, en ese caso te devuelve su valor
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}