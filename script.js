const articles =  document.getElementsByClassName('clicable')
const articlesArray = Array.from(articles)
articlesArray.forEach((article) => article.addEventListener('click', (e) => e.target.classList = "article-animation"))