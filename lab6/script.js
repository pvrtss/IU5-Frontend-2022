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
const thirdTask = document.getElementById("dropdown-button");
const dropdown = document.getElementById("dropdown-content");

thirdTask.addEventListener("click", () => {dropdown.classList.toggle("dropdown-content-show")});

/////////////////// Task 4 ///////////////////
let escFlag = true;
const field = document.getElementById("field");
const pacman = document.getElementById("pacman");
document.addEventListener('mousemove', (mouse) => {
	if (!escFlag) {
		let x, y;
		const minX = field.offsetLeft,
		maxX = field.offsetLeft + field.offsetWidth - pacman.offsetWidth,
		minY = field.offsetTop,
		maxY = field.offsetTop + field.offsetHeight - pacman.offsetHeight;
		const mouseX = mouse.pageX - pacman.offsetWidth / 2,
		mouseY = mouse.pageY - pacman.offsetHeight / 2;

		 if (mouseX < minX) x = 0;
		 else if (mouseX > maxX) x = field.offsetWidth - pacman.offsetWidth - 2;
		 else x = mouseX - minX;

		 if (mouseY < minY) y = 0;
		 else if (mouseY > maxY) y = field.offsetHeight - pacman.offsetHeight - 2;
		 else y = mouseY - minY;

		 pacman.style.left = `${x}px`;
		 pacman.style.top = `${y}px`;
	}
 });

 pacman.addEventListener('click', () => {
	escFlag = false;
 })

 document.addEventListener('keyup', (k) => {
 if (k.key.toLowerCase() === 'escape') {
	escFlag = true;
 }
 })
 
 /////////////////// Task 5 ///////////////////
 const episodesButton = document.getElementById("episodes-button");
 const episodes = document.getElementById("episodes")
 
 episodesButton.addEventListener("click", () => {
	fetch("https://breakingbadapi.com/api/episodes").then((data) => data.json()).then((data) => {
		data.forEach((ep) => {
			const episode = document.createElement("div");
			episode.classList.add("episode-card");
			
			const title = document.createElement('h1');
			title.innerText = `${ep.title}`
			episode.appendChild(title);
			
			const season = document.createElement('h4');
			season.innerText = `Сезон ${ep.season}`
			episode.appendChild(season);
			
			const epNum = document.createElement('h4');
			epNum.innerText = `Серия ${ep.episode}`
			episode.appendChild(epNum);
			
			const airDate = document.createElement('h4');
			airDate.innerText = `Дата выхода: ${ep.air_date}`
			episode.appendChild(airDate);
			
			const chars = document.createElement('h4');
			chars.innerText = "Персонажи:"
			episode.appendChild(chars);
			const characters = document.createElement('div');
			characters.classList.add("characters");
			ep.characters.forEach((ch) => {
				const charact = document.createElement('p');
				charact.innerText = ch;
				characters.appendChild(charact);
			}) 
			episode.appendChild(characters);
			episodes.appendChild(episode);
		})
	})
 
 })
