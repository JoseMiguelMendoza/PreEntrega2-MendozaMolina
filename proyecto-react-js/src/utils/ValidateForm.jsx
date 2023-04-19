export const validateForm = () => {
    const nombre = document.querySelector('#inputNombre')
    const apellido = document.querySelector('#inputApellido')
    const telefono = document.querySelector('#inputTelefono')
    const email = document.querySelector('#inputEmail')
    const confirmEmail = document.querySelector('#inputConfirmEmail')

    nombre.classList.remove('redBorder')
    apellido.classList.remove('redBorder')
    telefono.classList.remove('redBorder')
    email.classList.remove(['redBorder','yellowBorder'])
    confirmEmail.classList.remove(['redBorder','yellowBorder'])

    if(nombre.value == ''){
        nombre.classList.add('redBorder')
        return false
    }
    if(apellido.value == ''){
        apellido.classList.add('redBorder')
        return false
    }
    if (telefono.value == ''){
        telefono.classList.add('redBorder')
        return false
    }
    if (email.value == ''){
        email.classList.add('redBorder')
        return false
    }
    if(confirmEmail.value == ''){
        confirmEmail.classList.add('redBorder')
        return false
    }
    if (email.value !== confirmEmail.value){
        (email && confirmEmail).classList.add('yellowBorder')
        console.log("Chequear si ambos mails están bien escritos, pues deben ser iguales.")
        return false
        }
    
        return true
}






