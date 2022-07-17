const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const timeTop = document.getElementById("time-top");
const timeBody = document.getElementById("time-body__time");
const timeBodyDay = document.getElementById("time-body__day");
const showDate = () => {
  const date = new Date();
  var day = days[date.getDay()];
  var hour = date.getHours();
  var min = date.getMinutes();
  if (hour >= 0 && hour <= 9) {
    timeTop.innerText = `0${hour} : ${min}`;
    timeBody.innerText = `0${hour} : ${min}`;
    timeBodyDay.innerHTML = `${day}`;
  } else if (min >= 0 && min <= 9) {
    timeTop.innerText = `${hour} : 0${min}`;
    timeBody.innerText = `${hour} : 0${min}`;
    timeBodyDay.innerHTML = `${day}`;
  } else {
    timeTop.innerText = `${hour} : ${min}`;
    timeBody.innerText = `${hour} : ${min}`;
    timeBodyDay.innerHTML = `${day}`;
  }
  let t = setTimeout(function(){ showDate() }, 1000);
};
showDate();
