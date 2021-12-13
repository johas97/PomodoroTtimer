const minRef = document.querySelector(".minDisplay");
const sekRef = document.querySelector(".sekDisplay");

let sekVal = 12;
let minVal = 45;

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
}, 100)

