/**
 * Rafael Jesús Nieto Cardador
 */

{
    let nombre;
    let fecha;
    let dni;

    let errorNombre;
    let errorFecha;
    let errorDni;

    let iniciar = function(){
        document.getElementById("nombre").addEventListener("blur", validarNombre);
        document.getElementById("fecha").addEventListener("blur", validarFecha);
        document.getElementById("dni").addEventListener("blur", validarDNI);
        document.getElementById("nuevoEmpleado").addEventListener("click", validarFormulario);

        errorNombre = document.getElementById("errorNombre");
        errorFecha = document.getElementById("errorFecha");
        errorDni = document.getElementById("errorDni");
    }

    let validarFormulario = function(){
        if(validarNombre() && validarDNI() && validarFecha()){
            new Empleado(nombre, fecha, dni).crearNuevaVentana();
            document.getElementById("nombre").value = "";
            document.getElementById("fecha").value = "";
            document.getElementById("dni").value = "";
        }
    }

    let validarNombre = function(){
        nombre = document.getElementById("nombre").value;
        let nombreReg = new RegExp("[A-ZÑÁÉÍÓÚÑ][a-zñóáéíú]+[ ]?[A-ZÑÁÉÍÓÚÑ][a-zñóáéíú]+[ ]?[A-ZÑÁÉÍÓÚÑ][a-zñóáéíú]+[ ]?");
        if(nombre == ""){
            errorNombre.innerHTML = "ERROR: El nombre no puede estar vacío.";
            return false;
        }
        if(!nombreReg.test(nombre)){
            errorNombre.innerHTML = "ERROR: El formato del nombre es incorrecto (El nombre y los apellidos comienzan por mayúscula seguidos de minúsculas. Ej Nombre Apellido1 Apellido2).";
            return false;
        }
        errorNombre.innerHTML = "";
        return true;  
    }

    let validarFecha = function(){
        fecha = document.getElementById("fecha").value;
        let fechaReg = new RegExp("([0-9][0-9])([/-])([0-9][0-9])([/-])([0-9][0-9][0-9][0-9])");
        let fechaExec = fechaReg.exec(fecha);
        let fechaActual = new Date();
        let mensajeFechaNac = "ERROR: La fecha de nacimiento es mayor que la actual.";
        let fechaObjeto = new Date(`${fechaExec[5]}/${fechaExec[3]}/${fechaExec[1]}`);
        if(fecha == ""){
            errorFecha.innerHTML = "ERROR: La fecha no puede estar vacía.";
            return false;
        }
        if(!fechaReg.test(fecha)){
            errorFecha.innerHTML = "ERROR: El formato de la fecha es incorrecto. (DD-MM-AAAA)";
            return false;
        }
        if(fechaExec[2] != fechaExec[4]){
                errorFecha.innerHTML = "ERROR: El formato de la fecha es incorrecto. (Puedes usar / o - para separar la fecha, pero no ambos.)";
                return false;
        }
        if(Number(fechaExec[1]) != fechaObjeto.getDate() || Number(fechaExec[3]) != fechaObjeto.getMonth() +1 || Number(fechaExec[5]) != fechaObjeto.getFullYear()){
            errorFecha.innerHTML = "ERROR: La fecha es incorrecta (Ejemplo: día 45 de febrero).";
            return false;
        }
        if(fechaExec[5] > fechaActual.getFullYear()){
                errorFecha.innerHTML = mensajeFechaNac;
                return false;
        }
        if(fechaExec[5] == fechaActual.getFullYear() && fechaExec[3] > (fechaActual.getMonth() +1)){
            errorFecha.innerHTML = mensajeFechaNac;
            return false;
        }
        if(fechaExec[3] == (fechaActual.getMonth() +1) && fechaExec[1] > fechaActual.getDate()){
            errorFecha.innerHTML = mensajeFechaNac;
            return false;
        }
        errorFecha.innerHTML = "";
        return true;  
    }

    let validarDNI = function(){
        dni = document.getElementById("dni").value.toUpperCase();
        const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
        let dniReg = new RegExp("([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])[- ]?([A-Z])");
        let dniExec = dniReg.exec(dni);
        if(dni == ""){
            errorDni.innerHTML = "ERROR: El DNI no puede estar vacío.";
            return false;
        }
        if(!dniReg.test(dni)){
            errorDni.innerHTML = "ERROR: El formato del DNI es incorrecto.";
            return false;
        }
        if(dniExec[2] != letras[dniExec[1]%23]){
                errorDni.innerHTML = "ERROR: La letra introducida no es correcta.";
                return false;
        }

        errorDni.innerHTML = "";
        return true;  
    }

    document.addEventListener("DOMContentLoaded", iniciar);
}