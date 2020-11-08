const clockContainer = document.getElementsByClassName("js-clock");

const clockContainer2 = document.querySelector(".js-clock"),
  test = clockContainer2.querySelector(".js-title");

console.log(clockContainer2);
console.log(test);
//clockTitle = clockContainer.querySelector("h1");
function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  console.log(date);
  //clockTitle.innerText = "${hours}:";
  //const date = new Date()
  //date.getDay()
  //date
  //date.getDate();
  //date.getHours();
  //date.getMinutes();
}

function init() {
  getTime();
}

init();
