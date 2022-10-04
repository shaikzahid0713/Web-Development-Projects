/* global document */
    
const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const noonElement = document.getElementById("ampm");

function updateClock() {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let isNoon = "AM";

    if (hour > 12) {
        hour -= 12;
        isNoon = "PM";
    }


    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    hourElement.innerText = hour;
    minuteElement.innerText = minutes;
    secondsElement.innerText = seconds;
    noonElement.innerText = isNoon;
    
    setTimeout(() => {
        updateClock()
    }, 1000);
}

updateClock();
