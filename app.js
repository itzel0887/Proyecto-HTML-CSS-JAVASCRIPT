// 1- carrusel de Imagenes

let imagenes = document.querySelectorAll(".carrousel-img"); //paso uno obetener las variables de los elementos del dom
let botonAnt = document.getElementById("button-antes");
let botonDsp = document.getElementById("button-dsp")
let carruselcont = document.getElementById("carrousel-imagenes")

let currentIndex = 0;

//funcion para que se vea la primera imagen

function primeraimagen (index){
    
    imagenes.forEach(img => img.classList.remove("active"));

   if (index < 0) index = imagenes.length - 1;

   if (index >= imagenes.length) index = 0;


   imagenes[index].classList.add('active');
   currentIndex = index;

}
// funciones de los botones con EventListener click de manera manual 
botonAnt.addEventListener("click", ()=> {
    primeraimagen(currentIndex - 1);
});

botonDsp.addEventListener("click", () => {
    primeraimagen(currentIndex + 1);

});

// seTinterval para que las imagenes cambien cada 3 seg automaticamante 
setInterval(() => {
    primeraimagen(currentIndex + 1);
}, 4000);

primeraimagen(currentIndex);


// 2- Boton de leer mas; obtenemos primero las variables del dom 

let original = document.getElementById("parrafo");
let adicionaltext = document.getElementById("mas-texto");
let boton = document.getElementById("boton-leer-mas")

boton.addEventListener("click", function () {

    if (adicionaltext.style.display === "none"){

        adicionaltext.style.display = "inline";
        boton.textContent = "Read Less";

    }
    else {
       adicionaltext.style.display = "none";
       boton.textContent = "Read More"
    }
});


// 3- Ventana popup

let popup = document.getElementById("ventana-popup");
let email = document.querySelector(".email");
let btnsuscribete = document.getElementById("suscribite");
let btncierre = document.getElementById("btn-close");

function mostrarpopup(){
    popup.style.display = "flex";


}

function cerrarpopup(){

    popup.style.display = "none";

}

setTimeout(function (){
 mostrarpopup();

}, 5000);

btncierre.addEventListener("click", function(){
    cerrarpopup();

})

//validacion de email 

function emailvalido (email){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;  
    return regex.test(email);

}

btnsuscribete.addEventListener("click", function(){

    if(email.value !== "" && emailvalido(email.value)){
        alert("You have Suscribe with email:" + email.value);
        cerrarpopup();

    }
    else{
        alert("Please enter a valid Email.");

    }
})




