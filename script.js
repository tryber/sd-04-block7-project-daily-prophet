const article = document.getElementsByClassName('article-animation');
for (let i = 0; i < article.length; i += 1) {
  article[i].addEventListener('click', function () {
    article[i].style.animationPlayState = 'paused';
    article[i].style.animationPlayState = 'running';
  });
}
