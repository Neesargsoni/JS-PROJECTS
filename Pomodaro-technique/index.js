// const startEl = document.getElementById("start");
// const stopEl = document.getElementById("stop");
// const resetEl = document.getElementById("reset");
// const timerEl = document.getElementById("timer");

// let interval;
// let timeLeft = 1500;

// function updateTimer() {
//   let minutes = Math.floor(timeLeft / 60);
//   let seconds = timeLeft % 60;
//   let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
//     .toString()
//     .padStart(2, "0")}`;

//   timerEl.innerHTML = formattedTime;
// }

// function startTimer() {
//   interval = setInterval(() => {
//     timeLeft--;
//     updateTimer();
//     if (timeLeft === 0) {
//       clearInterval(interval);
//       alert("Time's up!");
//       timeLeft = 1500;
//       updateTimer();
//     }
//   }, 1000);
// }
// function stopTimer() {
//   clearInterval(interval);
// }
// function resetTimer() {
//   clearInterval(interval);
//   timeLeft = 1500;
//   updateTimer();
// }

// startEl.addEventListener("click", startTimer);
// stopEl.addEventListener("click", stopTimer);
// resetEl.addEventListener("click", resetTimer);

const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')
const timer = document.getElementById('timer')
let interval;
let timeleft = 1500;
function updatetimer()
{
    let minutes = Math.floor(timeleft / 60);
    let seconds = timeleft % 60;
    let formattedtime = `${minutes.toString().padStart(2,"0")}: ${seconds.toString().padStart(2,"0")}`
    timer.innerHTML = formattedtime;
}
function starttimer(){
    if(!interval)
    {
        interval = setInterval(()=>{
            if(timeleft > 0){
                timeleft--;
                updatetimer();
            }
            else if(timeleft == 0){
              clearInterval(interval)
              alert("time's up");
              timeleft = 1500;
              updatetimer();
            }
            else{
                clearInterval(interval)
                interval = null;
                timeleft = 1500
            }
        },1000)
    }

}
function stoptimer(){
    clearInterval(interval)
    interval = null;
}
function resettimer(){
    clearInterval(interval)
    interval = null;
    timeleft = 10;
    updatetimer();
}

updatetimer();

start.addEventListener("click",starttimer)
stop.addEventListener("click",stoptimer)
reset.addEventListener("click",resettimer)