const article = document.getElementById('lorem-article');

function animaElem() {
  article.style.animation = 'article-grow 4s';
}

article.addEventListener('click', animaElem);
