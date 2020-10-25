/*1. Develop a web app in which:
   i. Test if geolocation is available.
   ii. If it's available, show the current position (latitude and longitude)
   iii. If it isn't available, show a message for each and everyone of the possible errors.
   iv. Improve your code so you show the position continuously (although the user could be in moving, so it could change)
   v. Find the way to meassure the distance traveled.
*/
/*
function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(posicion) {
      const latitud  = posicion.coords.latitude;
      const longitud = posicion.coords.longitude;
      
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitud}/${longitud}`;
      mapLink.textContent = `Latitud: ${latitud} °, Longitud: ${longitud} °`;
    }
  
    function error() {
      status.textContent = 'No se pudo obtener tu localización';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Localización no soportada por tu navegador';
    } else {
      status.textContent = 'Localizando…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);
  */

  // ------ No funciona lo de abajo -------
/*
    function initMap() {
        var options = {
        zoom:10,
        center: { lat:40.730610, lng:-73.935242} //Coordinates of New York 
        }
        var map = new google.maps.Map(document.getElementById('map'), options);
        var marker = new google.maps.Marker({
            position:{lat: 40.6782, lng: -73.9442}, // Brooklyn Coordinates
            map:map, //Map that we need to add
            icon:'https://img.icons8.com/fluent/48/000000/marker-storm.png',
            // adding custom icons (Here I used a Flash logo marker)
            draggarble: false// If set to true you can drag the marker
        });
        
        var information = new google.maps.InfoWindow({
            content: '<h4>The marker is at Brooklyn</h4>'
        });
        
        marker.addListener('click', function() {
            information.open(map, marker);
        });       
    }
*/