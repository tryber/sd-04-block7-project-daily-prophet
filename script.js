// const rocket = document.querySelector('.rocket-complete');
// const rocket2 = document.querySelector('.rocket');
const starsTd = document.querySelectorAll('.star');

function randomTd() {
  const randomIndex = Math.floor(Math.random() * starsTd.length);
  return randomIndex;
}
// function randomDelay () {
//   const randomDelay = Math.floor(Math.random()*2 + 2.999999999)
//   return randomDelay;
// }
// const animationsArray = ['starsFlashing', 'starsFlashing2', 'starsFlashing3'];

let saveArray = [];

function starsDisappearing() {
  for (let i = 0; i < saveArray.length; i += 1) {
    starsTd[saveArray[i]].className = 'star';
  }
  saveArray = [];
}

setInterval(function () {
  for (let i = 0; i < 30; i += 1) {
    const rIndex = randomTd();
    // let rDelay = randomDelay();
    // starsTd[rIndex].style.animationDuration= `${rDelay}s`;
    starsTd[rIndex].classList.add('starsFlashing');
    saveArray.push(rIndex);
    starsTd[rIndex].addEventListener('animationend', starsDisappearing);
  }
  return saveArray;
}, 3000);


// function starsDisappearing() {
//   for (let i = 0; i < saveArray.length; i += 1) {
//     starsTd[i].className = 'star starsFlashing';
//   }
// //   console.log(saveArray);
// }

// document.querySelector('.container-layout').addEventListener('mouseover', function() {
//   starsFlashing();
// })
// console.log(saveArray);

// rocket.addEventListener('animationend', bounceTransition);


// function bounceTransition() {
//   // const rect = rocket.getBoundingClientRect();
//   // rocket.style.setProperty('left', `${rect.left}px`);
//   // rocket.style.setProperty('top', `${rect.top}px`);
//   rocket2.classList.add('big')
// }


// function gettingStyle() {
//   // const cssStyle = rocket.offsetLeft;
//   // const cssStyle2 = rocket.offsetTop;
//   // console.log(cssStyle2, cssStyle);
//   const rect = rocket.getBoundingClientRect();

//   console.log("popup.getBoundingClientRect(): \n" + "x: " + rect.left + "\ny: " + rect.top);
// }
// rocket.addEventListener('mouseover', gettingStyle)
