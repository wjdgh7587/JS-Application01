const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector(".js-title");

console.log(clockContainer);
console.log(clockTitle);
//clockTitle = clockContainer.querySelector("h1");
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hours = date.getHours();

    console.log(date);

    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${
    seconds < 10 ? `0${seconds}` : seconds
    //true and false
  }`;
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
  setInterval(getTime, 1000);
}

init();