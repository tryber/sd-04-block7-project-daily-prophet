window.onload = function () {
  const articles = document.querySelectorAll('article');
  for (let i = 0; i < articles.length; i += 1) {
    art = articles[i];
    art.addEventListener('click', function () {
      art.classList.add('article-animation');
    });
  }
};
