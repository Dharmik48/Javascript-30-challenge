const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now     = new Date(),
          secs = now.getSeconds(),
          mins    = now.getMinutes();
    let hours = now.getHours();

    if (hours > 12) {
        hours -= 12;
    }

    const secDeg  = (((secs / 60) * 360) + 90);
    const minDeg  = (((mins / 60) * 360) + 90);
    const hourDeg = (((hours / 12) * 360) + 90);

    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);