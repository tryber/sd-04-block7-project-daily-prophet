const articles = document.getElementsByClassName('article-animation');
const articlesArray = Array.from(articles);
articlesArray.forEach((article) => {
  article.addEventListener('click', (e) => (e.target.style.animation = 'article-grow 4s'));
});
