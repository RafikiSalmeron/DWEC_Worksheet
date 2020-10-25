// 1.  Crea las siguientes funciones
// a)  invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
/*
function invierteCadena(cadena){
  var i = cadena.length;
  var cadInv = "";

  while (i>=0) {
    cadInv = cadInv + cadena.charAt(i);
    i--;
  }
  return cadInv;
}

document.write(invierteCadena("Jaja,Rafiki"));
*/
// b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la cadena
/*
function inviertePalabras(cadena){

  var cadenaInvertida = "";
  var num = cadena.length;


  for(var i = cadena.length; i >= 0; i--){

    if(cadena[i] == " "){
      cadenaInvertida = cadenaInvertida + cadena.substring(i, num);
      num = i;
    }

  }
  
  cadenaInvertida = cadenaInvertida + " " + cadena.substring(0, num);

  return cadenaInvertida;
}

document.write(inviertePalabras("Palabra1 Palabra2 Palabra3"));
*/
// c) encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres dada devuelve la longitud de la palabra m s larga en ella contenida
/*
function encuentraPalabraMasLarga(cadena){

  var palabra = "";
  var palabralarga = "";
  var num = cadena.length;


  for(var i = cadena.length; i >= 0; i--){

    if(cadena[i] == " "){
      palabra = cadena.substring(i, num);
      if(palabra.length > palabralarga.length){
        palabralarga = palabra;
      }
      num = i;
    }

  }
  
  palabra = cadena.substring(i, num);
  if(palabra.length > palabralarga.length){
    palabralarga = palabra;
  }

  return palabralarga;
}

document.write(encuentraPalabraMasLarga("PalabraCo PalabraLarga PalabraMed"));
*/
// d)  fltraPalabrasMasLargas(cad_arg, i): para una cadena de caracteres y un valor numérico (i), devuelva el número de palabras cuya longitud es mayor a i.
/*
function fltraPalabrasMasLargas(cadena, n){

  var palabra = "";
  var palabralarga = "";
  var num = 0;


  for(var i = 0; i <= cadena.length; i++){

    if(cadena[i] == " "){
      palabra = cadena.substring(num, i);
      if(palabra.length > n){
        palabralarga = palabralarga + palabra;
      }
      num = i;
    }

  }
  
  palabra = cadena.substring(num, i);
  if(palabra.length > n){
    palabralarga = palabralarga + palabra;
  }

  return palabralarga;
}

var i = parseInt(prompt("Introduce el valor de i: "));

document.write(fltraPalabrasMasLargas("uno cuatro diecinueve", i));
*/
// e)  fcadenaBienFormada(cad_arg): formatea correctamente la cadena pasada, de tal modo que aparece en mayúscula la primera letra y el resto en minúscula.
/*
function fltraPalabrasMasLargas(cadena){

  var letra = cadena[0].toUpperCase();
  var cad = letra + cadena.substring(1, cadena.length).toLowerCase();
  return cad;
 
}

document.write(fltraPalabrasMasLargas("hOLA ME LLAMo RafA"));
*/
// 2. Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina 
// si esa cadena está formada por mayúsculas, por minúsculas o por una mezcla de ambas
/*
function cadLowUpp(cadena){
  var res = "La cadena \" "+ cadena + "\" ";
  
  if(cadena == cadena.toUpperCase()) {
    res += " está formada sólo por mayúsculas";
  }else if(cadena == cadena.toLowerCase()) {
    res += " está formada sólo por minúsculas";
  }else {
    res += " está formada por mayúsculas y minúsculas";
  }
  document.write(res);
}
cadLowUpp("Me llamo Rafa");
*/

// 7. Desarrolla una función que tomando como entrada una cadena de texto nos devuelva si es o no un palíndromo. 
/*
function inviertePalabras(cadena){
  cadena = cadena.trim();
  var i = cadena.length;
  var cadInv = "";

  while (i>=0) {
    cadInv = cadInv + cadena.charAt(i);
    i--;
  }


  if (cadena == cadInv){
    return "La cadena : " + cadena + " es palíndroma";
  }

  return "La cadena : \" " + cadena + " \" no es palíndroma";
}

document.write(inviertePalabras("oso oso "));
*/

// 9.  Escribir un procedimiento que lea una palabra y la escriba (formateada dentro de una tabla) como se ve en la figura: 
/*
function palabracuadrada(palabra){
  var final = "";
  var x = palabra.length;
  var inversa = "";

  while (x>=0) {
    inversa = inversa + palabra.charAt(x);
    x--;
  }

  x = palabra.length;

  var table="<table>";
  for(var i =0;i<x;i++){
      table += "<tr>";
      for(var j =0;j<x;j++){
        table+= "<td>";
        if (i==0){
          table+= palabra[j]+"</td>";
        }else if (i == x -1){
          table+= inversa[j]+"</td>";
        }else if (j==0){
           table += palabra[i]+"</td>";
        } else if (j==x-1) {
          table+= inversa[i]+"</td>";
        }
      }
      table+="</tr>";
  }    
  table+="</table>"

  document.write("Entrada: "+palabra+"<br>");
  document.write("Salida: <br>");
  document.write(table);
}

palabracuadrada("HOLA");
*/

