//1.- crea	un	script	que	pregunte	tu	nombre,	apellidos	y	tu	edad	y	los	muestre	en	la	p�gina	web	en	
//p�rrafos	distintos.
/*
var nombre = prompt("Introduce tu nombre");
var apellido = prompt("Introduce tu apellido");
var edad = prompt("Introduce tu edad");

document.write("<p>Nombre: " + nombre + "</p>");
document.write("<p>Apellido: " + apellido + "</p>");
document.write("<p>Edad: " + edad + "</p>");
*/

//3.- crea	un	script	que	muestre	en	una	ventana	emergente	�hola�	y	tu	nombre	(pidi�ndolo	
//anteriormente)	utilizando	concatenaci�n	de	cadenas.
/*
var nombre = prompt("Introduce tu nombre");

alert ("Hola " + nombre)
*/

//4.- crea	un	script	que	pida	al	usuario	su	edad,	nombre,	apellidos	y	ciclo	que	estudia,	y	muestre	esa	
//informaci�n	en	pantalla	en	una	ventana	emergente.
/*
var nombre = prompt("Introduce tu nombre");
var apellido = prompt("Introduce tu apellido");
var edad = prompt("Introduce tu edad");
var ciclo = prompt("�Qu� ciclo est�s cursando?");

alert ("Nombre : " + nombre + "\nApellido : " + apellido + "\nEdad : " + edad + "\nCiclo : " + ciclo)
*/

//--------------------------CONDICIONALES---------------------------------------
//1.- crea	un	script	que	determine	si	un	n�mero	introducido	por	el	usuario	es	par
/*
var num = parseInt(prompt("Introduzca n�mero"));

if (num % 2 == 0){
	alert("El n�mero introducido es par.")
}else{
	alert("El n�mero introducido es impar.")
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
//�Enhorabuena�	a	los	usuarios	de	m�s	de	25	a�os	de	Madrid.
/*
var edad = parseInt(prompt("Introduzca su edad"));
var loc = prompt("Introduzca su localidad");

if(edad > 25 && loc == "Madrid"){
	alert("Enhorabuena");
}
*/

//4.- crea	un	script	que	pida	un	n�mero	al	usuario,	y	si	ese	n�mero	es	superior	a	100	le	aplique	un	
//descuento	del	15%,	mostrando	el	nuevo	n�mero	en	pantalla.
/*
var num = parseInt(prompt("Introduzca un n�mero"));

if (num > 100){
	num = num - (num * 0.15);
	alert ("Descuento aplicado del 15%");
}
document.write("N�mero : " + num);
*/

//5.- crea	un	script	que	pregunte	al	usuario	por	su	nombre,	y	conteste	�Bienvenido�	o	�Bienvenida�	seg�n	
//si	el	nombre	introducido	es	de	hombre	o	de	mujer	(nota:	real�zalo	s�lo	para	los	nombres:	Pablo,	Ana,	
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

//6.- crea	un	script	que	pida	a	un	usuario	d�nde	vive;	si	vive	en	Madrid	y	tiene	entre	18	y	30 a�os,	el	script	
//debe	mostrar	en	pantalla	que	el	usuario	puede	acceder	al	carnet	de	empresarios	emprendedores.

var edad = parseInt(prompt("Introduzca su edad"));
var ciu = prompt("Introduzca d�nde vive");

if(edad >= 18 && edad <= 30 && ciu == "Madrid"){
	document.write("Puedes acceder al carnet de empresarios emprendedores");
}else{
	document.write("NO Puedes acceder al carnet de empresarios emprendedores");
}


