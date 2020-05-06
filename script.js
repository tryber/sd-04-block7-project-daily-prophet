document.querySelectorAll('article').forEach(function (event) {
  event.addEventListener('click', function () {
    event.style.animationPlayState = 'running ';
  });
});
