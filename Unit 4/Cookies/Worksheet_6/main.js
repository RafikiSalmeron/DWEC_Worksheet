//document.cookie = "name=Rafiki";
//document.cookie = "apellido=Salmeron; max-age=50";
//document.cookie = "cookiename= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"

window.onload = function(){
  if((getCookie("name") != "") || (getCookie("name") == "null")){
    alert('Bienvenido ' + getCookie("name"));
  }else{
    var name = prompt("Introduce tu nombre: ");
    document.cookie ="name=" + name +";max-age=300";
  }
};

var user = document.getElementById("user");


function alertCookie() {
  document.cookie = "name=" + user.value +";max-age=300";
  alert("Has cambiado el nombre");
}
function logout() {
  document.cookie = "name= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  alert("Has cerrado Sesión");
}


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


