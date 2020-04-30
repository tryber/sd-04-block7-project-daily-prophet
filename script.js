const articleAnimation = document.querySelector('article');

function enlargeArticle() {
  // articleAnimation.classList.add('article-animation');
  articleAnimation.style.animationPlayState = 'running';
}

articleAnimation.addEventListener('click', enlargeArticle);
