/* global document */
    
if (document != undefined) {
    const hourelement = document.getelementbyid("hour");
    const minuteelement = document.getelementbyid("minutes");
    const secondselement = document.getelementbyid("seconds");
    const noonelement = document.getelementbyid("ampm");
}

function updateclock() {
    let hour = new date().gethours();
    console.log(hour);
    let minutes = new date().getminutes();
    console.log(minutes);
    let seconds = new Date().getSeconds();
    console.log(seconds);
    let isNoon = "AM";

    if (hour > 12) {
        h -= 12;
        isNoon = "PM";
    }

    h = (h < 10) ? "0" + h : h;

    hourElement.innerText = hour;
    minuteelement.innertext = minutes;
    secondselement.innertext = seconds;
    noonElement.innerText = isNoon;
}

updateClock();