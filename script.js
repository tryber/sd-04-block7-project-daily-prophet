window.onload = function () {
  const articles = document.querySelectorAll('.articles');

  for (let i = 0; i < articles.length; i += 1) {
    articles[i].addEventListener('click', function () {
      articles[i].classList.toggle('article-animation');
    });
  }
};
