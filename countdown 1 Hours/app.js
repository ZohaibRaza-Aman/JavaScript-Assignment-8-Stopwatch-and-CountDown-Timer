var startingHours = 01;
var startingMinutes = 60;
var time = startingMinutes * 60;


var inputHours = document.getElementById('Hours');
var inputMinutes = document.getElementById('Minutes');
var inputSec = document.getElementById('Seconds');

setInterval(updateCountDown,1000);

function updateCountDown(){
    var minutes = Math.floor(time / 60);
    var Seconds = time % 60;
    var Hour = Math.floor(00 / 3600);
    Seconds = Seconds < 10 ? '0' + Seconds : Seconds;

    inputHours.value = Hour;
    inputMinutes.value = minutes;
    inputSec.value = Seconds;
    
    time--;
}