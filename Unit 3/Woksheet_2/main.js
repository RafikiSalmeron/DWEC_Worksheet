// 5) Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
// al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
// juntos los elementos pares y los impares. Después, volver a mostrar el array
/*
paresImpares();

function paresImpares(){
  var arrays = new Array();
  var arraysPar = new Array();
  var arraysImpar = new Array();


  document.write("Elementos del array sin ordenar: ");
  for (var i = 0; i < 100; i++){
    var num = parseInt((Math.random() *1000) +1);
    arrays.push(num);
    document.write(arrays[i] + " ");
  }

  document.write("<br>");

  document.write("Elementos del array ordenados por par/impar: ");
  for (var i of arrays){
    if(i % 2 == 0){
      arraysPar.push(i);
    }else{
      arraysImpar.push(i);
    } 
  }

  arrays = arraysPar.concat(arraysImpar);

  for (var i of arrays){
    document.write(i + " ");
  }
}
*/
// 7) Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una dimensión:
// a) Establecer los 10 elementos del array a cero.
// b) Añadir 1 a cada uno de los elementos del array.
// c) Muestra los valores del array separados por espacios
/*
var array = [1,2,3,4,5,6,7,8,9,10];

anadirUno(array);
valorescero(array);

function mostrar(array){
  for (var i of array){
    document.write(i + " ");
  }
}

function valorescero(array){
    document.write("<br>Array : ");
    mostrar(array);
    
    for(var i = 0; i < array.length; i++){
      array[i] = 0;
    }

    document.write("<br>Array a 0:");
    mostrar(array);
}

function anadirUno(array){
  for(var i=0;i<array.length;i++){
    array[i]=array[i]+1;
  }

  document.write("Array sumandole uno : ");
  mostrar(array);
}
*/
// 9) Mejora el ejercicio anterior para además mostrar una tabla bidimensional que muestre las
// combinaciones (no sólo la suma) que se han ido dando (ahora sí podemos usar arrays
// bidimensionales).

var array= new Array();
var cont2=0, cont3=0, cont4=0, cont5=0,cont6=0,cont7=0,cont8=0,cont9=0,cont10=0,cont11=0,cont12=0;

dados(array);

function dados(array){
  for(var i = 0; i < 36000; i++){

    var num1 = parseInt(Math.random()* (6) +1);
    var num2 = parseInt(Math.random()* (6) +1);
    var suma = num1 + num2;

    switch (suma) {
      case 2:
        cont2 += 1;
        break;
      case 3:
        cont3 += 1;
        break;
      case 4:
        cont4 += 1;
        break;
      case 5:
        cont5 += 1;
        break;
      case 6:
        cont6 += 1;
        break;
      case 7:
        cont7 += 1;
        break;  
      case 8:
        cont8 += 1;
        break;
      case 9:
        cont9 += 1;
        break;
      case 10:
        cont10 += 1;
        break;
      case 11:
        cont11 += 1;
        break;
      case 12:
        cont12 += 1;
        break;
      default:
        console.error('Error');
    }
  }

  document.write("<table border = 1 cellspacing = 0><tr>");
  for (var i = 2; i <=12; i ++){
    document.write("<td>"+i+"</td>");
  }

  document.write("<tr><td>" + cont2 + "</td>");
  document.write("<td>" + cont3 + "</td>");
  document.write("<td>" + cont4 + "</td>");
  document.write("<td>" + cont5 + "</td>");
  document.write("<td>" + cont6 + "</td>");
  document.write("<td>" + cont7 + "</td>");
  document.write("<td>" + cont8 + "</td>");
  document.write("<td>" + cont9 + "</td>");
  document.write("<td>" + cont10 + "</td>");
  document.write("<td>" + cont11 + "</td>");
  document.write("<td>" + cont12 + "</td></tr></table>");


}


