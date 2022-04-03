/////////////////// Task 1 ///////////////////
const firstTask = document.getElementById("color-square");

firstTask.addEventListener(
    "click",
    () => (firstTask.style.background = "#" + Math.floor(Math.random() * 16777215).toString(16))
);

/////////////////// Task 2 ///////////////////
const secondTask = document.getElementById("timer-box");
const sec = document.getElementById("sec");
const ms = document.getElementById("ms");
let secAcc = 0;
let msAcc = 0;
let secTimerId;
let msTimerId;
secondTask.addEventListener("mouseenter", () => {
    msAcc = 0;
    secTimerId = setInterval(() => {
        secAcc++;
        sec.innerHTML = secAcc > 9 ? `${secAcc}` : 0 + `${secAcc}`;
    }, 1000);
    msTimerId = setInterval(() => {
        msAcc++;
        if (msAcc > 99) msAcc = 0;
        ms.innerHTML = msAcc > 9 ? `${msAcc}` : 0 + `${msAcc}`;
    }, 10);
});
secondTask.addEventListener("mouseleave", () => {
    clearInterval(secTimerId);
    clearInterval(msTimerId);
});

/////////////////// Task 3 ///////////////////


