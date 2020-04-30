window.onload = function() {
  let articles = document.querySelectorAll('article');
  for (const art of articles) {
    art.addEventListener('click', function() {
      art.classList.add('article-animation');
    });
  }
};
