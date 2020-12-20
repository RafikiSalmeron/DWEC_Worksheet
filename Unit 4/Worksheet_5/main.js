

Array.from(document.getElementsByTagName("input")).forEach((item, i) => {
  item.style.width="250px";
});


document.getElementById("form").style.width="500px";
document.getElementById("form").style.backgroundColor="lightblue";
document.getElementById('boton').style.marginTop='10px';

function comprobar(){
  var input1 = document.getElementById('inputNombre');
  var input2 = document.getElementById('inputApe');
  var input3 = document.getElementById('inputDNI');
  var input4 = document.getElementById('inputTel');
  var input5 = document.getElementById('inputEmail');
  var input6 = document.getElementById('inputNick');

  if((input1.value!="") && (input2.value!="") && (input3.value!="")&& (input4.value!="")&& (input5.value!="")&& (input6.value!="")){
    var expresion_regular_nomUsuario =/(?=.*\d)(?=.*[!@#$%^&()+])[\w!@#$%^&()+]{8,}$/;
    var expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
    var expresion_regular_numero =/^\d{9}$/;
    var expresion_regular_email =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(expresion_regular_dni.test (input3.value) == true){
      if(expresion_regular_numero.test (input4.value) == true){
        if(expresion_regular_email.test (input5.value) == true){
          if(expresion_regular_nomUsuario.test (input6.value) == true){

          }else{alert("EL NOMBRE DE USUARIO NO ESTÁ BIEN");}
        }else{alert("EL EMAIL NO ESTÁ BIEN");}
      }else{alert("EL NÚMERO NO ESTÁ BIEN");}
    }else{alert("EL DNI NO ESTÁ BIEN");}
  }else{alert("FALTA ALGÚN VALOR");}
}
