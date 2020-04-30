const articleAnimation = document.querySelector('article');

function enlargeArticle() {
  articleAnimation.style.animationPlayState = 'running';
}

articleAnimation.addEventListener('click', enlargeArticle);
