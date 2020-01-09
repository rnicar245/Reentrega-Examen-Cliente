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
        + "<h3>"+this.nombre+"</h3><br>"
        + "<h2>Fecha de nacimiento:</h2>"
        + "<h3>"+this.fecha+"</h3><br>"
        + "<h2>DNI:</h2>"
        + "<h3>"+this.dni+"</h3><br>"
        + "</body></html>");
        ventana.document.close();
    }
}