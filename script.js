const article = document.querySelector('.article-container');

article.addEventListener('click', (e) => {
  if (e.target.classList.contains('article-animation')) {
    e.target.classList.remove('article-animation');
  } else {
    e.target.classList.add('article-animation');
  }
});
