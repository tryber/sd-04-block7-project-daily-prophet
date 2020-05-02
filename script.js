const article = document.getElementsByClassName('class-animation');
for(let i = 0; i < article.length; i += 1){
  article[i].addEventeListener('click', function () {
    article[i].style.animationPlayState = 'running';
  })
}

