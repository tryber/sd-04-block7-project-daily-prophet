const articleAnimation = document.querySelector('.article1');

function enlargeArticle() {
  articleAnimation.classList.add('article-animation');
}

articleAnimation.addEventListener('click', enlargeArticle);
