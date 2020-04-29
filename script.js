/*Requisito 10: ao clicar em um artigo, ele deve crescer em 50% ao longo de 4 segundos, 
e sua fonte deve ir ficando gradativamente mais em negrito durante essa transição.*/

function ampliarArtigos() {
    const articleAnimation = document.querySelectorAll('.article-animation');
    for (let i = 0; i < articleAnimation.length; i ++) {
      articleAnimation[i].addEventListener('click', () => {
        articleAnimation[i].style.animationPlayState = 'running';
      });
    }
  }
  
ampliarArtigos();
