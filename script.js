const articleAnimation = document.querySelector('.article1');

function enlargeArticle(e) {
  e.target.classList.add('article-animation');
}

articleAnimation.addEventListener('click', enlargeArticle);
