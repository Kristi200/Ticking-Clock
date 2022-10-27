
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');

function time(){
  const date = new Date();
  const sec = date.getSeconds();
  const secDegree = ((sec/60) * 360) + 180;
  second.style.transform = `rotate(${secDegree}deg)`;


  const min = date.getMinutes();
  const minDegree = ((min/60) * 360) + 180;
  minute.style.transform = `rotate(${minDegree}deg)`;


  const hr = date.getHours();
  const hourDegree = ((min/12) * 360) + 90;
  hour.style.transform = `rotate(${hourDegree}deg)`;

}

setInterval(time, 1000);