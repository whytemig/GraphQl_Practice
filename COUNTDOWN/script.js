const hoursInput = document.querySelector("#hours");
const minutesInput = document.querySelector("#minutes");
const secondsInput = document.querySelector("#seconds");

const hoursDiv = document.querySelector("#hours-result");
const minutesDiv = document.querySelector("#minutes-result");
const secondsDiv = document.querySelector("#seconds-result");

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

// store the value for the target time.
let targetTime;
let timeInterval;

function updateTimer() {
  if (targetTime) {
    let differenceSeconds = Math.floor((targetTime - Date.now()) / 1000);

    if (differenceSeconds < 0) {
      clearInterval(timeInterval);
      return;
    }

    const hours = Math.floor(differenceSeconds / 3600);
    const minutes = Math.floor((differenceSeconds % 3600) / 60);
    const seconds = Math.floor(differenceSeconds % 60);

    hoursDiv.textContent = hours;
    minutesDiv.textContent = minutes;
    secondsDiv.textContent = seconds;
  }
}

function startBtn() {
  //get the value from the users
  const userHours = parseInt(hoursInput.value) || 0;
  const userMinutes = parseInt(minutesInput.value) || 0;
  const userSeconds = parseInt(secondsInput.value) || 0;

  const currentTime = Date.now();
  let targetSeconds = userHours * 3600 + userMinutes * 60 + userSeconds;

  if (targetTime && targetSeconds === 0) {
    targetSeconds = Math.floor((targetTime - currentTime) / 1000);
  }

  targetTime = currentTime + targetSeconds * 1000;

  hoursInput.value = 0;
  minutesInput.value = 0;
  secondsInput.value = 0;

  updateTimer();
  clearInterval(timeInterval);
  timeInterval = setInterval(updateTimer, 500);
}

function stopTimer() {
  clearInterval(timeInterval);
}

function localTimeFunc() {
  const localStorageTimed = localStorage.getItem("targetTime");

  if (localStorageTimed) {
    targetTime = parseInt(localStorageTimed);
    updateTimer();
    timeInterval = setInterval(updateTimer, 500);
  }
}
localTimeFunc();

startButton.addEventListener("click", startBtn);
stopButton.addEventListener("click", stopTimer);
