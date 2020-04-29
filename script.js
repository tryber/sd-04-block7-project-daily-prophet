const articleAnimation = document.querySelectorAll('.article-animation');

  for (let i = 0; i < articleAnimation.length; i ++) {
    articleAnimation[i].addEventListener('click', function () {
        articleAnimation[i].style.animationPlayState = 'running';
    });
  };
