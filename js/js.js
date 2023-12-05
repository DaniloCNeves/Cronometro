var hora = 0;
var min = 0;
var seg = 0;

setInterval(cronometro,1000);

function cronometro(){
    seg++;
    if(seg == 60){//completou um minuto
        seg = 0;
        min++;
        if(min == 60){//completou uma hora
            min = 0;
            hora++;
            if(hora == 24){//completou um dia
                hora = 0;
            }
        }
    }       // condição  ? retorno verdade : retorno mentira
    $("#hora").html(hora < 10 ? "0" + hora : hora);
    $("#min").html(min < 10 ? "0" + min : min);
    $("#seg").html(seg < 10 ? "0" + seg : seg);
}