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

    //getElementsByTagName
    /***
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
    */

    //querySelector
    /***
    var logo = document.querySelector('.logo');
    console.log(logo);

    var encabezado = document.querySelectorAll('h2, footer p');
    console.log(encabezado);

    var encabezado = document.querySelectorAll('h2');
    console.log(encabezado[1].innerText); 
    
    var enlaces = document.querySelectorAll('a');
    console.log(enlaces);  
    */

    //querySelectorAll
    /***
    var enlace = document.querySelectorAll('a');
    
    for (let i = 0; i < enlace.length; i++) {
      console.log(enlace[i]);      
    }
    */

    //Nodos
    /***
    var enlaces = document.querySelectorAll('#menu ul li a')[0];
    //console.log(enlaces.innerText);
    console.log(enlaces.nodeType);
    console.log(enlaces.nodeName);
    console.log(enlaces.attributes[0]);
    console.log(enlaces.firstChild);
    console.log(enlaces.nodeName.nodeValue);

    //enlaces.firstChild.nodeValue = "Home";
    enlaces.id = "mi_id";
    */

    //Crear Contenido

    var sidebar = document.querySelector('#sidebar');
    var nuevoElemento =document.createElement("H1");
    var nuevoTexto = document.createTextNode("Hola Mundo");

    nuevoElemento.appendChild(nuevoTexto);
    sidebar.appendChild(nuevoElemento);




  });
  
})();