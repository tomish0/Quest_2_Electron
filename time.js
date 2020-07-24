var time = document.querySelector("#time");

const getTime = () => {
  const currentDate = new Date();
  var currentTime = currentDate.toLocaleTimeString();
  time.innerHTML = currentTime;
}


document.addEventListener("DOMContentLoaded", () => {
    getTime();
  });