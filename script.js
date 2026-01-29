let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let display = document.getElementById('displayTime');
let startStopBtn = document.getElementById('startStopBtn');
let resetBtn = document.getElementById('resetBtn');
let interval = null;
let isRunning = false;

// Function to update time
function stopwatch() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = `${h}:${m}:${s}`;
}

// Start/Stop functionality
startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(interval);
        startStopBtn.innerHTML = "Start";
        isRunning = false;
    } else {
        // Update every 10ms for milliseconds display
        interval = setInterval(stopwatch, 10);
        startStopBtn.innerHTML = "Stop";
        isRunning = true;
    }
});

// Reset functionality
resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    display.innerHTML = "00:00:00";
    startStopBtn.innerHTML = "Start";
    isRunning = false;
});