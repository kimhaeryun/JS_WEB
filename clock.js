const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Date();
  const mintes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${mintes < 10 ? `0${mintes}` : mintes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  
}

function init(){
  getTime();
  setInterval(getTime, 1000);
}

init();