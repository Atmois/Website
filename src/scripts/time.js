// Code adapted from https://claym1x.com

function padZero(num) {
    return num < 10 ? '0' + num : num;
}
function setLondonTime() {
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Europe/London'
    };
    const timeString = new Intl.DateTimeFormat('en-GB', options).format(now);
    document.getElementById("localTime").innerHTML = timeString;
}
window.onload = function() {
    setLondonTime();
    setInterval(setLondonTime, 10000);
};