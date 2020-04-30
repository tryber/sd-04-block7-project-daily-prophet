window.onload = function () {
  const articles = document.querySelectorAll('article');
  for (let i = 0; i < articles.length; i += 1) {
    addEvent(articles[i]);
  }
};

function addEvent(elem) {
  elem.addEventListener('click', function () {
    elem.classList.add('article-animation');
  });
}
