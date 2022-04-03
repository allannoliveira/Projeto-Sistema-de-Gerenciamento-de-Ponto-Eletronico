var day = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado');
var month = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
function Relogio(){
    var data = new Date();
    var hr = data.getHours();
    var min = data.getMinutes();
    var sec= data.getSeconds();

    
    
    var horass = window.document.getElementById('hora');
    var minutoss = window.document.getElementById('minuto');
    var segundoss = window.document.getElementById('segundo');
    horass.innerHTML = hr;
    minutoss.innerHTML = min;
    segundoss.innerHTML = sec;
    
}
var data = function(){
    var date = new Date();
    var fullDate = day[date.getDay()] + ', ' + date.getDate() + ' de ' + month[ date.getMonth()] +' de ' + date.getFullYear();
    document.getElementById('data').innerHTML = fullDate;
}
Relogio();
setInterval( function(){
    Relogio();
}, 1000)

setInterval(function(){
    data();
}, 1000)
