/**
 * Rafael Jesús Nieto Cardador
 */

{
    function Empleado(nombre, fecha, dni) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.dni = dni;
    }

    Empleado.prototype.crearNuevaVentana = function(){
        let ventana = window.open("", "", "top=0,left=0,width=1000,height=1000");
        ventana.document.write("<html><head></head><body>"
        + "<h2>Nombre:</h2>"
        + "<h3>"+this.getNombre()+"</h3><br>"
        + "<h2>Fecha de nacimiento:</h2>"
        + "<h3>"+this.getFecha()+"</h3><br>"
        + "<h2>DNI:</h2>"
        + "<h3>"+this.getDni()+"</h3><br>"
        + "</body></html>");
        ventana.document.close();
    }

    Empleado.prototype.getNombre = function(){
        return this.nombre;
    }

    Empleado.prototype.getFecha = function(){
        return this.fecha;
    }

    Empleado.prototype.getDni = function(){
        return this.dni;
    }
}