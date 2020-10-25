// 1. Realiza una página que cree un objeto de tipo Date y muestre en la
//página la siguiente información (cada una en una línea):
/*
var fecha = new Date();
document.write("Año actual: "+fecha.getFullYear()+"<br>");
document.write("Mes actual : "+(fecha.getMonth()+1)+"<br>");
document.write("Día actual : "+fecha.getDate()+"<br>");
document.write("Hora actual : "+fecha.getHours()+"<br>");
document.write("Minutos actuales : "+fecha.getMinutes()+"<br>");
document.write("Segundos actuales : "+fecha.getSeconds()+"<br>");
*/

// 2. Crea una página web en la que se muestre el resultado de cada uno de
//los siguientes apartados:
/*
var fechahoy = new Date();
document.write("Fecha = "+ fechahoy.getDate()+"/"+(fechahoy.getMonth()+1)+"/"+fechahoy.getFullYear()+"<br>");

var fecha85 = new Date();
fecha85.setDate(fechahoy.getDate()+85);
document.write("Fecha85 = " + fecha85.getDate()+"/"+(fecha85.getMonth()+1)+"/"+fecha85.getFullYear()+"<br>");

var fecha187 = new Date();
fecha187.setDate(fechahoy.getDate()-187);
document.write("Fecha187 = " + fecha187.getDate()+"/"+(fecha187.getMonth()+1)+"/"+fecha187.getFullYear()+"<br>");

fecha85.setYear(fecha85.getFullYear()+2);
document.write("Fecha85 = " + fecha85.getDate()+"/"+(fecha85.getMonth()+1)+"/"+fecha85.getFullYear()+"<br>");

fecha187.setHours(fecha187.getHours()-24);
document.write("Fecha187 = " + fecha187.getDate()+"/"+(fecha187.getMonth()+1)+"/"+fecha187.getFullYear()+"<br>");

var fechaResto = (fecha85.getTime() - fecha187.getTime());
document.write("FechaResto = " + fechaResto.getDate()+"/"+(fechaResto.getMonth()+1)+"/"+fechaResto.getFullYear()+"<br>");
*/

// 3. Utilizando setTimeout() creo un contador hacia atrás de 60 segundos
/*
var seg = 60;
funcion();
function funcion() {
    document.getElementById("label").innerHTML = seg;
    seg = seg -1;
    if(seg >= 0){
        setTimeout(funcion, 1000);
    }else{
        alert("El tiempo terminó");
    }   
}
*/




// 5. Usando el objeto Date, sus m todos getHours, getMinutes y GetSeconds y
//el método setTimeout() crea un reloj que se actualice cada segundo.
/*
reloj();
function reloj(){
    fecha = new Date();
    hora = fecha.getHours() + " : " +fecha.getMinutes() + " : " + fecha.getSeconds();
    document.getElementById("label").innerHTML = hora;
    setTimeout("reloj()",1000);
}
*/
