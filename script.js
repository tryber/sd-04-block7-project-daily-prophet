const article = document.getElementsByTagName('article');

article[0].addEventListener('focusout', () => {
  article[0].offsetWidth;
  article[0].classList.remove('article-animation');
})
