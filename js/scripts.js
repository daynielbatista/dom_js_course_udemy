(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    
    //getElementById
    /***
    var logo = document.getElementById('logo');
    var navegacion = document.getElementById('navegacion');
    navegacion.style.display ="none";
    */

    //getElementsByClassName
    /***
    var navegacion = document.getElementsByClassName('navegacion');
    console.log (navegacion[0]);     
      
    var contenido = document.getElementsByClassName('contenido');
    console.log (contenido[0]); 

    contenido[0].style.display = 'none';
    */

    var enlaces = document.getElementsByTagName('a');
    console.log(enlaces.length);

    for (var i = 0; i < enlaces.length; i++) {
      enlaces[i].setAttribute('target', '_blank');      
    }

    var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
    console.log(enlacesSidebar);

    for (let i = 0; i < enlacesSidebar.length; i++) {
      enlacesSidebar[i].setAttribute('href', 'http://www.as.com');
      
    }



  });
  
})();