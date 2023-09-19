
const clock = document.getElementById('clock');

function digitalClock() {
    let today = new Date();
    clock.innerHTML = today.toLocaleTimeString('en-In');
};
// Initial call
digitalClock();

// Call after ever 1sec
setInterval(digitalClock, 1000);


