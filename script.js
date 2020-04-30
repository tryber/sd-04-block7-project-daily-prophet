const sectionNode = document.querySelector('.section');
const articleNode = document.querySelector('.article');

console.log(articleNode)

articleNode.addEventListener('click', function(){
    console.log('teste')
    articleNode.className = '';
    articleNode.className = 'article-animation';
})