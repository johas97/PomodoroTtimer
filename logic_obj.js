//Idéer, Ändra startknappen till "Resume" samt "Running". Justera tiden på timer.
// Gör globala varibler till ett objekt.  


//Time Keeper object 
function TimeKeeper (startDate, currentDate, minuteTimer, secondsTimer, timeCounting, diffInSeconds, wasPaused) {
    this.startDate = startDate;
    this.currentDate = currentDate;
    this. minuteTimer = minuteTimer;
    this.secondsTimer = secondsTimer;
    this.timeCounting = timeCounting;
    this.diffInSeconds = diffInSeconds;
    this.wasPaused = wasPaused;
}

TimeKeeper.prototype.getStartDate = function() {
    return this.startDate;
}
TimeKeeper.prototype.getCurrentDate = function() {
    return this.currentDate;
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
TimeKeeper.prototype.getDiffInSeconds = function() {
    return this.diffInSeconds;
}
TimeKeeper.prototype.getWasPaused = function() {
    return this.wasPaused;
}
TimeKeeper.prototype.calculateDiffInSeconds = function() {
    return Math.round(((+this.currentDate) - (+this.startDate)) / 1000); 
      
}


TimeKeeper.prototype.setStartDate = function(newVal) {
    this.startDate = newVal; 
}
TimeKeeper.prototype.setCurrentDate = function(newVal) {
    this.currentDate = newVal;
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
TimeKeeper.prototype.setDiffInSeconds = function(newVal) {
    this.diffInSeconds = newVal;
    console.log(this.diffInSeconds);
}
TimeKeeper.prototype.setWasPaused = function(newVal) {
    this.wasPaused = newVal;
}

const timeKeeperObj = new TimeKeeper(null, null, 45, 0 , false, false, false);

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
        return this.resetBtn;
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
    timeKeeperObj.setDiffInSeconds(timeKeeperObj.calculateDiffInSeconds()); 
     ///Fel häär, behövs funktion "saveSecondsFromPause"
    timeKeeperObj.setWasPaused(true);
   // timeKeeperObj.setSecondsTimer((45*60) - ((selectors.getMinRef().textContent * 60) +
   //  parseInt(selectors.getSekRef().textContent))); 

});


selectors.getResetBtn().addEventListener("click", () => {
    
    clearInterval(countDown);
    timeKeeperObj.setMinuteTimer(45);
    timeKeeperObj.setSecondsTimer(0);
    selectors.getMinRef().textContent = timeKeeperObj.getMinuteTimer();
    selectors.getSekRef().textContent = "0" + timeKeeperObj.getSecondsTimer();
    timeKeeperObj.setTimeCounting(false);
});



// Countdown function

function startCountdown () {
    // DU vill ju ändra startdatum och ej "current datum" !!!!!
    timeKeeperObj.setStartDate(new Date());
    let passedTimeSeconds;

    const countDown = setInterval (() => {
      
        currentDate = new Date();
       /// Denna ska bort typ 
       if (timeKeeperObj.getWasPaused()){
        
        currentDate.setSeconds(timeKeeperObj.getDiffInSeconds());
        console.log(currentDate);
        timeKeeperObj.setCurrentDate(currentDate);
        timeKeeperObj.setWasPaused(false);
       }
       else{
        timeKeeperObj.setCurrentDate(currentDate);
        }
       
        passedTimeSeconds = timeKeeperObj.calculateDiffInSeconds();
      

        //Passed time in sek to min
        timeKeeperObj.setMinuteTimer(44 - Math.floor(passedTimeSeconds/60));
        timeKeeperObj.setSecondsTimer(60 - (passedTimeSeconds % 60));
   
        if (timeKeeperObj.getSecondsTimer() < 10) {
            selectors.getSekRef().textContent = "0" + timeKeeperObj.getSecondsTimer();
        }
        else {
            selectors.getSekRef().textContent = timeKeeperObj.getSecondsTimer();
        }
        selectors.getMinRef().textContent = timeKeeperObj.getMinuteTimer();

        if (timeKeeperObj.getSecondsTimer() === 0 && timeKeeperObj.getMinuteTimer() === 0) {
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

