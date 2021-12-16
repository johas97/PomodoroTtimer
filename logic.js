const minRef = document.querySelector(".minDisplay");
const sekRef = document.querySelector(".sekDisplay");


minVal = 45;
sekVal = 0;
let timeCounting = false;


// Button functions 

const startBtn = document.querySelector(".startButton");

startBtn.addEventListener("click", () => {
    if (sekVal === 0 && minVal === 0) {
        minVal = 45;

    } 
    if (!timeCounting) {
        countDown = startCountdown();
        timeCounting = true;

    }
});
const pauseBtn = document.querySelector(".pauseButton");

pauseBtn.addEventListener("click", () => {
    clearInterval(countDown);
    timeCounting = false;

});
const resetBtn = document.querySelector(".resetButton");

resetBtn.addEventListener("click", () => {
    
    clearInterval(countDown);
    minVal = 45;
    sekVal = 0;
    minRef.textContent = minVal;
    sekRef.textContent = "0" + sekVal;
    timeCounting = false;
});





// Countdown function

function startCountdown () {
    const countDown = setInterval (() => {
       
        if(sekVal === 0) {
            sekVal = 59;
            minVal -= 1;
        }
        else {
            sekVal -= 1
        }


        if (sekVal < 10) {
            sekRef.textContent = "0" + sekVal;
        }
        else {
            sekRef.textContent = sekVal;
        }
        
        minRef.textContent = minVal;
        if (sekVal === 0 && minVal === 0) {
            clearInterval(countDown);
            const sessionWin = document.querySelector(".victoryPic");
           const div = document.createElement('div');
            div.innerHTML = "<img src='yellow.png' alt=''>";
            sessionWin.appendChild(div);
            let audio = new Audio('New Bollywood Instrumental.mp3');
            audio.play();
        }
    
    }, 1000);

    return countDown;

}





