const articleAnimation = document.getElementsByTagName('article');

for (let i = 0; i < articleAnimation.length; i += 1) {
  articleAnimation[i].addEventListener('click', function () {
    this.style.animationPlayState = 'running';
  });
}
