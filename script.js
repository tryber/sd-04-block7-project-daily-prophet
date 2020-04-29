const articleAnimation = document.querySelectorAll('.article-animation');

for (let i = 0; i < articleAnimation.length; i += 1) {
  articleAnimation[i].addEventListener('click', function () {
  articleAnimation[i].style.animationPlayState = 'running';
  });
}
