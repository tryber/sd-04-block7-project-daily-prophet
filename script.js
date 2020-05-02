const article = document.getElementsByClassName('article-animation');
for (let i in article) {
  article[i].addEventListener('click', function () {
    article[i].style.animationPlayState = 'running';
  });
}
