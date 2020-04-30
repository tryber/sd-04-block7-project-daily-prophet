const articleAnimation = document.querySelector('.article1');

function enlargeArticle(e) {
  event.target.classList.add('article-animation');
  console.log(this.classList)
}

articleAnimation.addEventListener('click', enlargeArticle);
