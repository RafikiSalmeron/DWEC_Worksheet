// 1. Crea una página en la que se muestre:
/*
document.write("Número aleatorio entre 0 y 100 : " + parseInt(Math.random()*100) + "<br>");
document.write("Número aleatorio entre 100 y 200 : " + parseInt(Math.random() * (200-100) + 100) + "<br>");
var num1 = parseInt(prompt("Introduce el primer número: "));
var num2 = parseInt(prompt("Introduce el segundo número: "));

if(num1 < num2){
    document.write("Número aleatorio entre " + num1 +" y " + num2 +" : " + parseInt(Math.random() * (num2-num1) + num1));
}else{
    document.write("Número aleatorio entre " + num1 +" y " + num2 +" : " + parseInt(Math.random() * (num1-num2) + num2));

}
*/

// 5. Crea una web para resolver ecuaciones de segundo grado. Deberá pedir por 
//tanto los coeficientes y mostrar las soluciones posibles.
/*
var a = parseInt(prompt("Introduce el valor de a: "));
var b = parseInt(prompt("Introduce el valor de b: "));
var c = parseInt(prompt("Introduce el valor de c: "));

var raiz = Math.sqrt((b*b) - (4*a*c));
var arriba1 = b*-1 + raiz;
var arriba2 = b*-1 - raiz;

res1 = arriba1 / (2*a);
res2 = arriba2 / (2*a);

if(isNaN(res1)){
    document.write("No tiene resultado.")
}else{
    document.write("Resultado 1: x = " + res1 + "<br>");
    document.write("Resultado 2: x = " + res2 + "<br>");
}
*/

// 7. Crea una web que genere una tabla con dos columnas. En la primera un
// número ascendente y en la otra el valor de su seno.
/*
var num = Math.round(Math.random() * (30));
document.write("<table border = 0 cellspacing =2 bgcolor=black >");

for(var i =1;i<=parseInt(num);i++){
  document.write("<tr bgcolor=white height=50>")
  for(var k =1;k<=2;k++){
    if(k%2!=0){
      document.write("<td width =30>"+i+"</td>");
    }else{
      document.write("<td width =30>"+Math.sin(i)+"</td>");
    }
  }
  document.write("</tr>");
}

document.write("</table>");
*/

// 8. Crea una web en la que cada vez que se accede se muestre una imagen
// (de modo aleatorio) de entre 3 posibles.
/*
var num = parseInt(Math.random() * (3) + 1);

if(num==1){
  document.write("<img src=https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1>");
}else if(num==2){
  document.write("<img src=https://i.imgur.com/EGZ6BqS.png>");
}else{
  document.write("<img src=https://i.imgur.com/YUX8U7F.jpg>");
}
*/