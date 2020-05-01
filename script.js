const article = document.getElementById('lorem-article');

function animaElem() {
  article.className = 'article-animation';
}

article.addEventListener('click', animaElem);

// const article = document.getElementById('lorem-article');
// article.addEventListener('click', () => article.className = 'article-animation');
