const coruja = document.querySelector('.fly');
coruja.style.animation = 'flying 7000ms ease-in-out forwards';
coruja.style.animationDelay = '3000ms';
coruja.style.animationIterationCount = '3';
coruja.style.animationDirection = 'alternate';

const artigo = document.querySelector('.article-animation');
artigo.addEventListener('click', () => {
  artigo.style.animation = 'article-grow 4000ms ease-in';
});
