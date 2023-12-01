function Portafolio(){
    document.getElementById("portafolio-main").style.display = "grid"
    document.getElementById("container-main").style.display = "none"
    document.getElementById("contacto-main").style.display = "none"
    document.getElementById("aboutme-main").style.display = "none"
}
function Sobremi(){
    document.getElementById("aboutme-main").style.display = "grid"
    document.getElementById("portafolio-main").style.display = "none"
    document.getElementById("container-main").style.display = "none"
    document.getElementById("contacto-main").style.display = "none"
}

function Contacto() {
document.getElementById("contacto-main").style.display = "grid"
document.getElementById("aboutme-main").style.display = "none"
document.getElementById("container-main").style.display = "none"
}
function deniisolo(){
    location.reload();
}