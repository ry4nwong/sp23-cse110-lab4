let d = new Date();
let time = d.toLocaleTimeString();

function displayTime(time) {
    console.log(time);
}

let interval = setInterval(displayTime, 1000);