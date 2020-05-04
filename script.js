// getting a random star index:
const starsTd = document.querySelectorAll('.star');
function randomTd() {
  const randomIndex = Math.floor(Math.random() * starsTd.length);
  return randomIndex;
}

// removing the star animation:
let saveArray = [];
function starsDisappearing() {
  for (let i = 0; i < saveArray.length; i += 1) {
    starsTd[saveArray[i]].className = 'star';
  }
  saveArray = [];
}

// adding a animation to random stars and calling that function every 3s:
setInterval(function () {
  for (let i = 0; i < 30; i += 1) {
    const rIndex = randomTd();
    //  let rDelay = randomDelay();
    //  starsTd[rIndex].style.animationDuration= `${rDelay}s`;
    starsTd[rIndex].classList.add('starsFlashing');
    saveArray.push(rIndex);
    starsTd[rIndex].addEventListener('animationend', starsDisappearing);
  }
  return saveArray;
}, 3000);

// reseting animations on click!
const resetButton = document.getElementById('reset-button');
const rocket = document.querySelector('.rocket-complete');
const earth = document.querySelector('.earth');
const sky = document.querySelector('.sky');
const planets = document.querySelector('.planet-main');

function resetAnimation(element) {
  element.style.animation = 'none';
  const reflow = element.offsetHeight; // triggering reflow and restarting the element's animation 
  element.style.animation = null;
  return reflow;
}

resetButton.addEventListener('click', () => {
  resetAnimation(rocket);
  resetAnimation(earth);
  resetAnimation(sky);
  resetAnimation(planets);
  resetButton.style.display = 'none';
});

// settint the reset after the second animation (called 'bounce-and-go'):
let animationCount = 0;
rocket.addEventListener('animationend', () => {
  animationCount += 1;
  if (animationCount !== 1) {
    resetButton.style.display = 'block';
    animationCount = 0;
  }
});

// mandatory step
const articleDiv = document.querySelector('article');

articleDiv.addEventListener('click', function () {
  articleDiv.style.animationPlayState = 'running';
});
