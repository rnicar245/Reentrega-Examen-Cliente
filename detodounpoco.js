/**
 * Rafael Jesús Nieto Cardador
 */

{
    let inicio = function(){
        document.getElementById("informa").addEventListener("click", informa);
        document.getElementById("salir").addEventListener("click", salir);
    }

    let informa = function(){
        let fechaHoy = new Date();

        let p = document.createElement("p");
        p.setAttribute("id", "parrafo");

        let p2= document.createElement("p");
        p2.setAttribute("id", "parrafo2");

        document.getElementById("body").appendChild(p);
        document.getElementById("body").appendChild(p2);

        document.getElementById("parrafo").innerHTML = "Estamos a "+calcularDia(fechaHoy)+".";
        document.getElementById("parrafo2").innerHTML = generarMensajeHora(fechaHoy);

    }

    let calcularDia = function(fechaHoy){
        let dia = "";
        switch(fechaHoy.getDay()){
            case 1:
                dia = "lunes";
                break;
            case 2:
                dia = "martes";
                break;
            case 3:
                dia = "miercoles";
                break;
            case 4:
                dia = "jueves";
                break;
            case 5:
                dia = "viernes";
                break;
            case 6:
                dia = "sabado";
                break;
            case 0:
                dia = "domingo";
                break;          
        }
        return dia;
    }

    let generarMensajeHora = function(fechaHoy){  
        let horas = fechaHoy.getHours();
        let minutos = fechaHoy.getMinutes(); 
        let horaString = calculaStringHora(horas, minutos);

        if(horas >= 18){
            return "Son las"+horaString+". Ya es hora de que dejes de trabajar. Hay que conciliar la vida laboral con la familiar";
        }else if(horas <= 8){
            return "Son las "+horaString+". Ya es hora de que comiences a trabajar. Hay que levantar el país";
        }else{
            return "Son las "+horaString+". Pronto llegan las vacaciones. Aguanta."; 
        }
    }

    let calculaStringHora = function(horas, minutos){
        let horasString = "";
        let minutosString = "";
        let horaString = "";

        if(horas <= 9){
            horasString = "0"+horas;
        }else{
            horasString = horas+"";
        }

        if(minutos <= 9){
            minutosString = "0"+minutos;
        }else{
            minutosString = minutos+"";
        }

        return horasString+":"+minutosString;
    }

    let salir = function(){
        window.close();
    }

    document.addEventListener("DOMContentLoaded", inicio);
}