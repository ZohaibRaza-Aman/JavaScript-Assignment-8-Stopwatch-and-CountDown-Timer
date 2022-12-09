miliSec=0;
sec=0;
min=0;

var displayMS=document.getElementById('displayMiliSec');
var displayS=document.getElementById('displaySec');
var displayM=document.getElementById('displayMin');
var makeDisable = document.getElementById('makeDisable');
var pauseDisable = document.getElementById('pauseDisable');
var resetDisable = document.getElementById('resetDisable');




function timer(){
    miliSec++;
    if(miliSec == 10){
        miliSec = 0;
        sec++
    }
    if(sec==60){
        sec = 0;
        min++
    }

    displayMS.innerHTML=miliSec
    displayS.innerHTML=sec
    displayM.innerHTML=min



}






var interval;

function startTimer(){
    interval = setInterval(function(){
      timer() 
    },100)

    startDisable.disabled = true;
    pauseDisable.disabled = false;
    resetDisable.disabled = false;

}


function pauseTimer(){
    console.log(interval)

    clearInterval(interval)

    startDisable.disabled = false;
    pauseDisable.disabled = true;
    resetDisable.disabled = false;
}


function resetTimer(){
    pauseTimer();
    min="00";
    sec="00";
    miliSec="00";
    displayMS.innerHTML=miliSec
    displayS.innerHTML=sec
    displayM.innerHTML=min

    startDisable.disabled = false;
    pauseDisable.disabled = false;
    resetDisable.disabled = true;
}