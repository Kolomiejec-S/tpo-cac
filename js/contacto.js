const formulario = document.getElementById('formulario');
const userNombre = document.getElementById('userNombre');
const userApellido = document.getElementById('userApellido');
const userEmail = document.getElementById('userEmail');

const alertNombre = document.getElementById('alertNombre');
const alertApellido = document.getElementById('alertApellido');
const alertEmail = document.getElementById('alertEmail');
const alertSuccess = document.getElementById('alertSuccess');

const regUserNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserApellido = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const successMsg = () => {
    alertSuccess.classList.remove('d-none');
    alertSuccess.textContent = "Consulta enviada con exito";
}

const errorMsg = (errors) => {
    errors.forEach(item => {
        item.tipo.classList.remove('d-none');
        item.tipo.textContent = item.msg;
    });
}

formulario.addEventListener('submit', e => {
    e.preventDefault();

    alertSuccess.classList.add('d-none');

    const errors = [];

    if(!regUserNombre.test(userNombre.value) || !userNombre.value.trim()){
        userNombre.classList.remove("is-valid");
        userNombre.classList.add("is-invalid");
        errors.push({
            tipo: alertNombre,
            msg: "Formato no valido en el campo nombre, solo letras"
        })
    }else{
        userNombre.classList.remove("is-invalid");
        userNombre.classList.add("is-valid");
        alertNombre.classList.add("d-none");
    }

    if(!regUserApellido.test(userApellido.value) || !userApellido.value.trim()){
        userApellido.classList.remove("is-valid");
        userApellido.classList.add("is-invalid");
        errors.push({
            tipo: alertApellido,
            msg: "Formato no valido en el campo apellido, solo letras"
        })
    }else{
        userApellido.classList.remove("is-invalid");
        userApellido.classList.add("is-valid");
        alertApellido.classList.add("d-none");
    }

    if(!regUserEmail.test(userEmail.value) || !userEmail.value.trim()){
        userEmail.classList.remove("is-valid");
        userEmail.classList.add("is-invalid");
        errors.push({
            tipo: alertEmail,
            msg: "Escriba un correo valido"
        })
    }else{
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }

    if(errors.length !== 0){
        errorMsg(errors);
        return;
    }
    
    successMsg();
    console.log("Formulario Enviado")
});