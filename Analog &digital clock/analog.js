const hour=document.querySelector('.hrs');
const minute=document.querySelector('.min');
const second=document.querySelector('.sec');

setInterval(runClock,1000);
function runClock(){
  const time=new Date();
  const sec=time.getSeconds()/60;
  const min=(sec+time.getMinutes())/60;
  const hrs=(min+time.getHours())/12;

  hour.style.setProperty('--rotation',hrs*360);
  minute.style.setProperty('--rotation',min*360);
  second.style.setProperty('--rotation',sec*360);

  let hours=document.querySelector('.hour');
  let minutes=document.querySelector('.minute');
  let seconds=document.querySelector('.second');
  let ampm=document.querySelector('.ampm');

  let h =new Date().getHours();
  let m =new Date().getMinutes();
  let s = new Date().getSeconds();

  let am = h >= 12? "PM" : "AM";

  if(h > 12){
    h = h - 12;
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
}
runClock();
