const minRef = document.querySelector(".minDisplay");
const sekRef = document.querySelector(".sekDisplay");
minVal = 45;
sekVal = 0;


// Button functions 

const startBtn = document.querySelector(".startButton");

startBtn.addEventListener("click", () => {
    countDown = startCountdown();
});
const pauseBtn = document.querySelector(".pauseButton");

pauseBtn.addEventListener("click", () => {
    clearInterval(countDown);

});
const resetBtn = document.querySelector(".resetButton");

resetBtn.addEventListener("click", () => {
    
    clearInterval(countDown);
    minVal = 45;
    sekVal = 0;
    minRef.textContent = minVal;
    sekRef.textContent = "0" + sekVal;
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
        }
    
    }, 100);

    return countDown;

}





