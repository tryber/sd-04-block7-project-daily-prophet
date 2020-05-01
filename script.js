const article = document.getElementById('lorem-article');

function animaElem() {
  // article.style.animation = 'article-grow 4s';
  article.style.fontWeight = 'bold';
  article.style.transform = 'scale(1.5)';
}

article.addEventListener('click', animaElem);
