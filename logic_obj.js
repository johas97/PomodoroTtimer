//Idéer, Ändra startknappen till "Resume" samt "Running". Justera tiden på timer.
// Gör globala varibler till ett objekt.  


//Time Keeper object 
function TimeKeeper (startDate, currentDate, diffInSeconds, minuteTimer, secondsTimer, timeCounting) {
    this.startDate = startDate;
    this.currentDate = currentDate;
    this.diffInSeconds = diffInSeconds; 
    this. minuteTimer = minuteTimer;
    this.secondsTimer = secondsTimer;
    this.timeCounting = timeCounting;
}

TimeKeeper.prototype.getStartDate = function() {
    return this.startDate;
}
TimeKeeper.prototype.getCurrentDate = function() {
    return this.currentDate;
}
TimeKeeper.prototype.getDiffInSeconds = function() {
    return this.diffInSeconds;
}
TimeKeeper.prototype.getMinuteTimer = function() {
    return this.minuteTimer;
}
TimeKeeper.prototype.getSecondsTimer = function() {
    return this.secondsTimer;
}
TimeKeeper.prototype.getTimeCounting = function() {
    return this.timeCounting;
}


TimeKeeper.prototype.setStartDate = function(newVal) {
    this.startDate = newVal; 
}
TimeKeeper.prototype.setCurrentDate = function(newVal) {
    this.currentDate = newVal;
}
TimeKeeper.prototype.setDiffInSeconds = function(newVal) {
    this.diffInSeconds = newVal;
}
TimeKeeper.prototype.setMinuteTimer = function(newVal) {
    this.minuteTimer = newVal;
}
TimeKeeper.prototype.setSecondsTimer = function(newVal) {
    this.secondsTimer = newVal;
}
TimeKeeper.prototype.setTimeCounting = function(newVal) {
    this.timeCounting = newVal;
}

const timeKeeperObj = new TimeKeeper(null, null, null, 45, 0 , false);

// Selectors object
const selectors = {
    minRef: document.querySelector(".minDisplay"),
    sekRef: document.querySelector(".sekDisplay"),
    startBtn: document.querySelector(".startButton"),
    pauseBtn: document.querySelector(".pauseButton"),
    resetBtn: document.querySelector(".resetButton"),

    getMinRef: function() {
        return this.minRef;
    },
    getSekRef: function() {
        return this.sekRef;
    },
    getStartBtn: function() {
        return this.startBtn;
    },
    getPauseBtn: function() {
        return this.pauseBtn;
    },
    getResetBtn: function() {
        return this.getResetBtnM;
    }
}

// Button functions 

selectors.getStartBtn().addEventListener("click", () => {
    if (timeKeeperObj.getSecondsTimer() === 0 && timeKeeperObj.getMinuteTimer === 0) {
      timeKeeperObj.setMinuteTimer(45);
    } 
    if (!timeKeeperObj.getTimeCounting()) {
        countDown = startCountdown();
        timeKeeperObj.setTimeCounting(true);
    }
});


selectors.getPauseBtn().addEventListener("click", () => {
    clearInterval(countDown);
    timeKeeperObj.setTimeCounting(false);
    timeKeeperObj.setSecondsTimer((45*60) - ((minRef.textContent * 60) + parseInt(sekRef.textContent))); 
  //  ijrdofpghujpot jdfsglio ju // Texten ovan måte bli tillgänglig i "räkne-funktionen"
});


selectors.getResetBtn().addEventListener("click", () => {
    
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

