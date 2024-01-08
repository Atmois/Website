// Code from https://claym1xprofile.neocities.org
let currentTimeOffset = 0;

function padZero(num) {
    return num < 10 ? '0' + num : num;
}

function setTime(offset) {
    let date = new Date();
    let utcDate = new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
    let localDate = new Date(utcDate.getTime() + (3600000 * offset));

    let hours = localDate.getUTCHours();
    let minutes = localDate.getUTCMinutes();

    let timeString = `${padZero(hours)}:${padZero(minutes)}`;
    document.getElementById("localTime").innerHTML = timeString;
}

window.onload = function() {
    setTime(currentTimeOffset);
    setInterval(() => setTime(currentTimeOffset), 10000);
};
