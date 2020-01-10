/**
 * Rafael Jesús Nieto Cardador
 */

{
    let inicio = function(){
        document.getElementById("enlace").addEventListener("click", deTodoUnPoco);
        document.getElementById("boton").addEventListener("click", empleado);
    }

    let deTodoUnPoco = function(){
        let ventana = window.open("", "", "top=0,left=0,width=200,height=200");
        ventana.document.write("<html><head><script src=\"detodounpoco.js\"></script></head><body id=\"body\">"
        + "<button id=\"informa\">Informa</button><button id=\"salir\">Salir</button></body></html>");
        ventana.document.close();
    }

    let empleado = function(){
        let ventana = window.open("", "", "top=0,left=0,width=1000,height=300");
        ventana.document.write("<html><head><script src=\"validar.js\"></script><script src=\"Empleado.js\"></script></head><body id=\"body\">"
        + "<label>Nombre <input type=\"text\" id=\"nombre\"/></label>"
        + "<p id=\"errorNombre\"></p><br>"
        + "<label>Fecha nacimiento <input type=\"date\" id=\"fecha\"></label><br><br>"
        + "<p id=\"errorFecha\"></p><br>"
        + "<label>DNI <input type=\"text\" id=\"dni\"/></label><br><br>"
        + "<p id=\"errorDni\"></p><br>"
        + "<button id=\"nuevoEmpleado\">nuevo Empleado</button>"
        + "</body></html>");
        ventana.document.close();
    }

    document.addEventListener("DOMContentLoaded", inicio);
}