const menuButton = document.querySelector('.menu-button');
const menuLine = document.querySelector('.menu-line');
const navLinks = document.querySelector('.nav-links');
const articles = document.querySelectorAll('article');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('nav-links-active');
  menuLine.classList.toggle('menu-line-active');
  document.body.style.overflow = document.body.style.overflow ===
  'hidden' ? 'initial' : 'hidden';
});

articles.forEach((article) => {
  article.addEventListener('click', () => {
    article.style.animation = article.style.animation === '' || article.style.animationName === 'article-shrink' ? 'article-grow 4s forwards' : 'article-shrink 4s forwards';
  });
});
