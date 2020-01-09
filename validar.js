/**
 * Rafael Jesús Nieto Cardador
 */

{
    let nombre;
    let fecha;
    let dni;

    let iniciar = function(){
        document.getElementById("nombre").onblur = validarNombre;
        document.getElementById("fecha").onblur = validarFecha;
        document.getElementById("dni").onblur = validarDNI;
        document.getElementById("nuevoEmpleado").addEventListener("click", validarFormulario);
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
            document.getElementById("errorNombre").innerHTML = "ERROR: El nombre no puede estar vacío.";
            return false;
        }else if(!nombreReg.test(nombre)){
            document.getElementById("errorNombre").innerHTML = "ERROR: El formato del nombre es incorrecto (El nombre y los apellidos comienzan por mayúscula seguidos de minúsculas).";
        }
        document.getElementById("errorNombre").innerHTML = "";
        return true;  
    }

    let validarFecha = function(){
        fecha = document.getElementById("fecha").value;
        let fechaReg = new RegExp("[0-9][0-9][0-9][0-9]([/-])[0-9][0-9]([/-])[0-9][0-9]");
        if(fecha == ""){
            document.getElementById("errorFecha").innerHTML = "ERROR: La fecha es incorrecta.";
            return false;
        }else if(!fechaReg.test(fecha)){
            document.getElementById("errorFecha").innerHTML = "ERROR: El formato de la fecha es incorrecto. (YYYY-MM-DD)";
            return false;
        }else if(fechaReg.test(fecha)){
            if(RegExp.$1 != RegExp.$2){
                document.getElementById("errorFecha").innerHTML = "ERROR: El formato de la fecha es incorrecto. (Puedes usar / o - para separar la fecha, pero no ambos.)";
                return false;
            }
        }
        document.getElementById("errorFecha").innerHTML = "";
        return true;  
    }

    let validarDNI = function(){
        dni = document.getElementById("dni").value.toUpperCase();
        const arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        let dniReg = new RegExp("([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])[- ]?([A-Z])");
        if(dni == ""){
            document.getElementById("errorDni").innerHTML = "ERROR: El DNI no puede estar vacío.";
            return false;
        }else if(!dniReg.test(dni)){
            console.log(RegExp.$1);
            document.getElementById("errorDni").innerHTML = "ERROR: El formato del DNI es incorrecto.";
            return false;
        }else if(dniReg.test(dni)){
            if(RegExp.$2 != arrayLetras[RegExp.$1%23]){
                document.getElementById("errorDni").innerHTML = "ERROR: La letra introducida no es correcta.";
                return false;
            }    
        }

        document.getElementById("errorDni").innerHTML = "";
        return true;  
    }

    let Empleado = function(nombre, fecha, dni){
        this.nombre = nombre;
        this.fecha = fecha;
        this.dni = dni;
    }

    Empleado.prototype.crearNuevaVentana = function(){
        let ventana = window.open("", "", "top=0,left=0,width=1000,height=1000");
        ventana.document.write("<html><head></head><body>"
        + "<h2>Nombre:</h2>"
        + "<h3>"+this.nombre+"</h3><br>"
        + "<h2>Fecha de nacimiento:</h2>"
        + "<h3>"+this.fecha+"</h3><br>"
        + "<h2>DNI:</h2>"
        + "<h3>"+this.dni+"</h3><br>"
        + "</body></html>");
        ventana.document.close();
    }

    document.addEventListener("DOMContentLoaded", iniciar);
}