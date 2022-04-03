const firstTask = document.getElementById("color-square");

firstEl.addEventListener(
  "click",
  () => (firstTask.style.background = "#" + Math.floor(Math.random()*16777215).toString(16))
);