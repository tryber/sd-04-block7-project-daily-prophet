const articleAnimation = document.querySelector('article');

function enlargeArticle() {
  articleAnimation.classList.add('article-animation');
}

articleAnimation.addEventListener('click', enlargeArticle);
