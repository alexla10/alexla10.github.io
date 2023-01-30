// Icono de menu barra
const navBar = document.querySelector(".nav-bar");
const navMenu = document.querySelector(".nav-menu");
const barIcon = document.querySelector(".nav-bar i");


navBar.addEventListener("click", function(){
    navMenu.classList.toggle("nav-menu-visible");
    if(navMenu.classList.contains("nav-menu-visible")){
        barIcon.setAttribute("class", "fa fa-times");
        console.log("pasa por el if");
    }else{
        barIcon.setAttribute("class", "fa fa-bars");
        console.log("pasa por el else");
    }
});

const menuLinks = document.querySelectorAll(`.nav-link`);
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click",function(){
        navMenu.classList.remove("nav-menu-visible");
        barIcon.setAttribute("class", "fa fa-bars");
    });
});

const info = document.querySelector(".mas_info");
document.getElementById("boton_mostrar").addEventListener("click",function(){
    info.classList.toggle("mas_info");
    if(info.classList.contains(`mas_info`)){
        document.getElementById("boton_mostrar").innerHTML = "Mas Info";
    }else{
        document.getElementById("boton_mostrar").innerHTML = "Ocultar";
    }
});

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


