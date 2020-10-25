//1.- crea	un	script	que	pregunte	tu	nombre,	apellidos	y	tu	edad	y	los	muestre	en	la	página	web	en	
//párrafos	distintos.
/*
var nombre = prompt("Introduce tu nombre");
var apellido = prompt("Introduce tu apellido");
var edad = prompt("Introduce tu edad");

document.write("<p>Nombre: " + nombre + "</p>");
document.write("<p>Apellido: " + apellido + "</p>");
document.write("<p>Edad: " + edad + "</p>");
*/

//3.- crea	un	script	que	muestre	en	una	ventana	emergente	“hola”	y	tu	nombre	(pidiéndolo	
//anteriormente)	utilizando	concatenación	de	cadenas.
/*
var nombre = prompt("Introduce tu nombre");

alert ("Hola " + nombre)
*/

//4.- crea	un	script	que	pida	al	usuario	su	edad,	nombre,	apellidos	y	ciclo	que	estudia,	y	muestre	esa	
//información	en	pantalla	en	una	ventana	emergente.
/*
var nombre = prompt("Introduce tu nombre");
var apellido = prompt("Introduce tu apellido");
var edad = prompt("Introduce tu edad");
var ciclo = prompt("¿Qué ciclo estás cursando?");

alert ("Nombre : " + nombre + "\nApellido : " + apellido + "\nEdad : " + edad + "\nCiclo : " + ciclo)
*/

//--------------------------CONDICIONALES---------------------------------------
//1.- crea	un	script	que	determine	si	un	número	introducido	por	el	usuario	es	par
/*
var num = parseInt(prompt("Introduzca número"));

if (num % 2 == 0){
	alert("El número introducido es par.")
}else{
	alert("El número introducido es impar.")
}
*/

//2.- crea	un	script	que	reciba	la	edad	de	un	usuario	y	determine	si	es	mayor	de	edad.
/*
var edad = parseInt(prompt("Introduzca su edad"));

if (edad >= 18){
	alert("Es mayor de edad.")
}else{
	alert("Es menor de edad.")
}
*/

//3.- crea	un	script	que	reciba	la	edad	de	un	usuario,	y	su	localidad	de	nacimiento	y	muestre	en	pantalla	
//“Enhorabuena”	a	los	usuarios	de	más	de	25	años	de	Madrid.
/*
var edad = parseInt(prompt("Introduzca su edad"));
var loc = prompt("Introduzca su localidad");

if(edad > 25 && loc == "Madrid"){
	alert("Enhorabuena");
}
*/

//4.- crea	un	script	que	pida	un	número	al	usuario,	y	si	ese	número	es	superior	a	100	le	aplique	un	
//descuento	del	15%,	mostrando	el	nuevo	número	en	pantalla.
/*
var num = parseInt(prompt("Introduzca un número"));

if (num > 100){
	num = num - (num * 0.15);
	alert ("Descuento aplicado del 15%");
}
document.write("Número : " + num);
*/

//5.- crea	un	script	que	pregunte	al	usuario	por	su	nombre,	y	conteste	“Bienvenido”	o	“Bienvenida”	según	
//si	el	nombre	introducido	es	de	hombre	o	de	mujer	(nota:	realízalo	sólo	para	los	nombres:	Pablo,	Ana,	
//Eduardo	y	Clara).
/*
var nombre = prompt("Introduce tu nombre");
letra = nombre.substr(nombre.length-1);

if ( letra == "a"){
	alert("Bienvenida")
}else{
	alert("Bienvenido")
}
*/

//6.- crea	un	script	que	pida	a	un	usuario	dónde	vive;	si	vive	en	Madrid	y	tiene	entre	18	y	30 años,	el	script	
//debe	mostrar	en	pantalla	que	el	usuario	puede	acceder	al	carnet	de	empresarios	emprendedores.

var edad = parseInt(prompt("Introduzca su edad"));
var ciu = prompt("Introduzca dónde vive");

if(edad >= 18 && edad <= 30 && ciu == "Madrid"){
	document.write("Puedes acceder al carnet de empresarios emprendedores");
}else{
	document.write("NO Puedes acceder al carnet de empresarios emprendedores");
}


