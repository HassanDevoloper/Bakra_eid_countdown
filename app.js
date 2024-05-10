
const bakraEidDate = new Date('June 16, 2024 00:00:00').getTime(); 


function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = bakraEidDate - now;

    // Calculate months, weeks, days, hours, minutes, and seconds
    const months = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30));
    const remainingAfterMonths = timeRemaining % (1000 * 60 * 60 * 24 * 30);
    
    const weeks = Math.floor(remainingAfterMonths / (1000 * 60 * 60 * 24 * 7));
    const remainingAfterWeeks = remainingAfterMonths % (1000 * 60 * 60 * 24 * 7);
    
    const days = Math.floor(remainingAfterWeeks / (1000 * 60 * 60 * 24));
    const remainingAfterDays = remainingAfterWeeks % (1000 * 60 * 60 * 24);
    
    const hours = Math.floor(remainingAfterDays / (1000 * 60 * 60));
    const remainingAfterHours = remainingAfterDays % (1000 * 60 * 60);
    
    const minutes = Math.floor(remainingAfterHours / (1000 * 60));
    const remainingAfterMinutes = remainingAfterHours % (1000 * 60);
    
    const seconds = Math.floor(remainingAfterMinutes / 1000);

    
    document.getElementById('months').innerText = months < 10 ? `0${months}` : months;
    document.getElementById('weeks').innerText = weeks < 10 ? `0${weeks}` : weeks;
    document.getElementById('days').innerText = days < 10 ? `0${days}` : days;
    document.getElementById('hours').innerText = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? `0${seconds}` : seconds;
}


setInterval(updateCountdown, 1000);


updateCountdown();
