//Idéer, Ändra startknappen till "Resume" samt "Running". Justera tiden på timer.
// Gör globala varibler till ett objekt.  

const minRef = document.querySelector(".minDisplay");
const sekRef = document.querySelector(".sekDisplay");

minuteTimer = 45;
secondsTimer = 0;
let timeCounting = false;


// Button functions 

const startBtn = document.querySelector(".startButton");

startBtn.addEventListener("click", () => {
    if (secondsTimer === 0 && minuteTimer === 0) {
        minuteTimer = 45;

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
    passedTimeSeconds = (45*60) - ((minRef.textContent * 60) + parseInt(sekRef.textContent)); 
  //  ijrdofpghujpot jdfsglio ju // Texten ovan måte bli tillgänglig i "räkne-funktionen"
});
const resetBtn = document.querySelector(".resetButton");

resetBtn.addEventListener("click", () => {
    
    clearInterval(countDown);
    minuteTimer = 45;
    secondsTimer = 0;
    minRef.textContent = minuteTimer;
    sekRef.textContent = "0" + secondsTimer;
    timeCounting = false;
});



// Countdown function

function startCountdown () {
    
    let startTime = new Date();
    let startFromPause;
    let passedTimeSeconds;

    if (minuteTimer == 45 && secondsTimer == 00) {
        startFromPause = false;
    }
    else {
        startFromPause = true; 
    }

    const countDown = setInterval (() => {
       let currentTime = new Date();
       

       if (!startFromPause) {
           passedTimeSeconds = Math.round(((+currentTime) - (+startTime) )/1000);
           
       }
       else { 
           startFromPause = false;
       }
       
     

        //Passed time in sek to min
        minuteTimer = 44 - Math.floor(passedTimeSeconds/60);
        secondsTimer = 60 - (passedTimeSeconds % 60); 

        if (secondsTimer < 10) {
            sekRef.textContent = "0" + secondsTimer;
        }
        else {
            sekRef.textContent = secondsTimer;
        }
        minRef.textContent = minuteTimer;

        if (secondsTimer === 0 && minuteTimer === 0) {
            clearInterval(countDown);
            
            const timerPicSelector = document.querySelector(".victoryPic");
            const div = document.createElement('div');
            div.innerHTML = "<img src='yellow.png' alt=''>";
            timerPicSelector.appendChild(div);
            
            let timerAudio = new Audio('New Bollywood Instrumental.mp3');
            timerAudio.volume = 0.18;
            timerAudio.play();
        }
    
    }, 1000);

    return countDown;

}





