const article = document.querySelectorAll('article');

window.onload = () => {
  for (let i = 0; i < article.length; i += 1) {
    article[i].addEventListener('click', () => {
      article[i].style.animationPlayState = 'running';
    });
  }
};
