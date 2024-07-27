const today = document.querySelector('h5#today');
const clock = document.querySelector('h2#clock');

const daysList = ['일', '월', '화', '수', '목', '금', '토'];

function getClock() {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const days = String(date.getDay());
  today.innerText = `${year}년 ${month}월 ${day}일 (${daysList[days]})`;
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
