//18122022
/* global Swal */
const correo = document.querySelector("#txtCorreoUsuario");
const pass = document.querySelector("#txtPassword");
const eye_show = document.querySelector("#eye-show");
const eye_hide = document.querySelector("#eye-hide");

let Ifacebook = "",
  Itwitter = "",
  Iinstragram = "";
eye_show.onclick = () => {
  if (pass.type === "password") {
    pass.type = "text";
    eye_show.classList.replace("show", "hide");
    eye_hide.classList.replace("hide", "show");
  }
};



eye_hide.onclick = () => {
  if (pass.type === "text") {
    pass.type = "password";
    eye_show.classList.replace("hide", "show");
    eye_hide.classList.replace("show", "hide");
  }
};

let userC, pass2;

document.querySelector("#accion").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Usuario\n" + "Correo: " + correo.value + " Contraseña: " + pass.value);
});

window.addEventListener("load",()=>{
  let txtfrase = document.querySelector("#txt_frase");
  txtfrase.innerHTML= "No eres lo que logras, eres lo que superas. " + "💯💪🍑";
});