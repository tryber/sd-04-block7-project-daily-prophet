const sectionArea = document.querySelector('.main-content');

function changeClass() {
  const articles = document.getElementsByClassName('article');
  for (let i = 0; i < articles.length; i += 1) {
    articles[i].className = 'article';
  }
}

sectionArea.addEventListener('click', function (event) {
  changeClass();
  event.target.parentElement.className = 'article article-animation';
});