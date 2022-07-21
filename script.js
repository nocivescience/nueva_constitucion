const daysEl=document.querySelector('.days');
const hoursEl=document.querySelector('.hours');
const minutesEl=document.querySelector('.minutes')
const secondsEl=document.querySelector('.seconds')
const currentYear = new Date().getFullYear();

const newYearTime = new Date(`September 04 ${currentYear} 08:00:00`);
// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  console.log(currentTime)
  
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  daysEl.innerHTML = d;
  hoursEl.innerHTML = h < 10 ? '0' + h : h;
  minutesEl.innerHTML = m < 10 ? '0' + m : m;
  secondsEl.innerHTML = s < 10 ? '0' + s : s;
}
// Run every second
setInterval(updateCountdown, 1000);