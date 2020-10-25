// 2) Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello 
// define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6. 
/*
document.write("El número aleatorio es: "+lanzamiento());

function lanzamiento(){
  return parseInt(Math.random()*(6)+1);
}
*/ 
// 3) Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
// modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
// de ocurrencias de cada uno de los valores.
/*
var dado1=0,dado2=0,dado3=0,dado4=0,dado5=0,dado6=0;

function lanzamiento(){
  return parseInt(Math.random()*(6)+1);
}

for(var i =0;i<6000;i++){
  var valor= lanzamiento();
  if( valor==1){ dado1=dado1+1;
  }else if(valor==2){dado2=dado2+1;
  }else if(valor==3){dado3=dado3+1;
  }else if(valor==4){dado4=dado4+1;
  }else if(valor==5){dado5=dado5+1;
  }else if(valor==6){dado6=dado6+1;}
}

document.write("El número 1 ha salido "+dado1+" veces<br>");
document.write("El número 2 ha salido "+dado2+" veces<br>");
document.write("El número 3 ha salido "+dado3+" veces<br>");
document.write("El número 4 ha salido "+dado4+" veces<br>");
document.write("El número 5 ha salido "+dado5+" veces<br>");
document.write("El número 6 ha salido "+dado6+" veces<br>");
*/
// 6) Crea una función para calcular potencias de un modo recursivo
/*
var base = parseInt(prompt("Introduce el valor de la base: "));
var pot = parseInt(prompt("Introduce el valor del exponente: "));
document.write("El resultado es: "+recursivo(base,pot));

function recursivo(base, pot){
    if (pot == 0){
      return 1;
    }
    var num = base;
    for(var x = 1; x < pot; x++){
      num = num * base;
    }
    return num;
}
*/
// 7) Crea una función que calcule el factorial de un número dado. Para comprobarlo, diseña una web que muestre en 
// forma de tabla el factorial para los valores de 1 a 10.
/*
var num = parseInt(prompt("Introduce un número"));
document.write("El factorial de " + num + " es: " + factorial(num));

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
document.write("<table border = 1 cellspacing = 0>")
for (var x = 1; x <= 10; x++){
  document.write("<tr><td>" + x + "</td><td>"+ factorial(x) + "</td></tr>")
}
document.write("</table>");
*/
