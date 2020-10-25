// 1.  Muestra, maquetada en una tabla HTML toda la información que puedas extraer mediante JavaScript del navegador cliente.
// 2 . Crea una página que contenga varios enlaces, imágenes y anclas de ejemplo y añade una serie de enlaces que realicen lo siguiente:
// a)  Muestra el número de imágenes del documento
document.write("<br>El número de imágenes es: "+document.images.length);
// b)  Muestra el id de la primera imagen
document.write("<br>El id de la primera imagen es: "+document.getElementsByTagName('img')[0].id);
// c)  Muestra el número de enlaces del documento
document.write("<br>El número de links de la pagina es: "+document.links.length);
// d)  Cambia el título del documento.
document.title="Worksheet #6 Cambiado";