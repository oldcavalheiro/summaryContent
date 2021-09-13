// timers 1000ms === 1s
// executes a piece of code once the timer expires

// setTimeout execute only once when called
// syntax: setTimeout(code, delay)
setTimeout(() => console.log("in two seconds i appears!"), 2000);
setTimeout(function () { console.log("Hello"); }, 2000);

// setInterval keep executing when time expires.(never end)
// clearInterval cancel setInterval
function loading() {
  let counter = 0;
  let delay = setInterval(frame, 3000);
  function frame() {
    if (counter === 3) {
      clearInterval(delay);
      console.log("task completed, fall in clearInterval");
    } else {
      counter += 1;
      console.log(`${counter} "...continue, counter += setInterval" `);
    }
  }
};

loading();