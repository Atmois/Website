// Code from https://claym1xprofile.neocities.org
let currentTimeOffset = 0;
let summerTime = true; 

function padZero(num) {
    return num < 10 ? '0' + num : num;
}

function setTime() {
    let date = new Date();
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    if (summerTime) {
        hours = (hours + 1) % 24; 
    }
    let timeString = `${padZero(hours)}:${padZero(minutes)}`;
    document.getElementById("localTime").innerHTML = timeString;
}

window.onload = function () {
    setTime(currentTimeOffset);
    setInterval(() => setTime(currentTimeOffset), 10000);
};