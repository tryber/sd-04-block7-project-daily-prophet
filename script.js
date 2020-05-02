window.onload = function () {
  const articleAnimationElement = document.getElementsByClassName('article-animation');
  articleAnimationElement[0].addEventListener('click', function () {
    articleAnimationElement[0].classList.add('play');
  });
};
