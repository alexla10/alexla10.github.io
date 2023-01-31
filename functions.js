// Icono de menu barra
const navBar = document.querySelector(".nav-bar");
const navMenu = document.querySelector(".nav-menu");
const barIcon = document.querySelector(".nav-bar i");


navBar.addEventListener("click", function(){
    navMenu.classList.toggle("nav-menu-visible");
    if(navMenu.classList.contains("nav-menu-visible")){
        barIcon.setAttribute("class", "fa fa-times");
    }else{
        barIcon.setAttribute("class", "fa fa-bars");
    }
});

//Quitar el menu al hacer click en un enlace
const menuLinks = document.querySelectorAll(`.nav-link`);
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click",function(){
        navMenu.classList.remove("nav-menu-visible");
        barIcon.setAttribute("class", "fa fa-bars");
    });
});

//Boton Mas Info
const info = document.querySelector(".mas_info");
document.getElementById("boton_mostrar").addEventListener("click",function(){
    info.classList.toggle("mas_info");
    if(info.classList.contains(`mas_info`)){
        document.getElementById("boton_mostrar").innerHTML = "Mas Info";
    }else{
        document.getElementById("boton_mostrar").innerHTML = "Ocultar";
    }
});

//Cambio de modo nocturno a claro
const switchBoton = document.getElementById("switch");
const estilo = document.getElementById("estilos")
switchBoton.addEventListener("click", function(){
    switchBoton.classList.toggle("activo");
    if(switchBoton.classList.contains("activo")){
        estilo.setAttribute("href","CSS/dark_mode.css");
    }else{
        estilo.setAttribute("href","CSS/styles.css");
    }
})


