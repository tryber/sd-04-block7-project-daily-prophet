const lua = document.querySelector('.fly');

function animaLua() {
  lua.style.animationName = 'flying';
  lua.style.animationDuration = '15s'
  lua.style.animationIterationCount = '3';
  lua.style.animationDirection = 'alternate';
  lua.style.animationFillMode = 'forwards';
}

window.onload = function () {
  setTimeout(function () {
    animaLua();
  }, 3000);
};
