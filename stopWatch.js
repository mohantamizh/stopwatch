let [hours,minutes,seconds] = [0,0,0];
let timer = null;
let displayTime =  document.getElementById("display-Time");

window.onload = function(){
    let watchStart = document.getElementById("start");
    watchStart.addEventListener('click',startTimer);
    let watchStop = document.getElementById("stop");
    watchStop.addEventListener('click',stopTimer);
    let watchReset = document.getElementById("reset");
    watchReset.addEventListener('click',resetTimer);
}

function startTimer(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(startWatch,1000);
}

function startWatch(){
    seconds++;
    if(seconds === 60)
    {
        seconds = 0;
        minutes++;
        if(minutes == 60)
        {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = `${h}:${m}:${s}`;
}
function stopTimer(){
    clearInterval(timer);
}
function resetTimer(){
    clearInterval(timer);
    [hours,minutes,seconds] = [0,0,0];
    displayTime.innerHTML = `00:00:00`;
}