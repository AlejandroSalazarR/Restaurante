const nombre = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const number = document.getElementById("number")
const ocupacion = document.getElementById("Ocupacion")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")



/* valida que el nombre del usuario no sea muy corto, en este caso si es menor que 6*/
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""

    /*con expresiones regulares validamos el correo */
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    let entrar = false

    parrafo.innerHTML= ""
if(nombre.value.length <6){
    warnings += `El nombre no es valido <br>`
    entrar = true
}

console.log(regexEmail.test(email.value))
if(!regexEmail.test(email.value)){
    warnings += `El Correo no es valido <br>`
    entrar = true
}


/*validar que la contraseña no sea menor a 6 caracteres*/
if(password.value.length <6){
    warnings += `La Contraseña no es valida <br>`
    entrar = true

}

if(entrar){
    parrafo.innerHTML = warnings
} else{
    parrafo.innerHTML = "Enviado"
}



})