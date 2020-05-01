window.onload = () => {
  document.getElementById('image-fly').classList.add('fly');
  document.getElementsByClassName('title')[0].style.transform = 'scale(1.1)';
  document.getElementById('link').style.transform = 'skew(-15deg, 0deg)';
};

document.querySelector('.container-first-section .subtitle').addEventListener('click', (e) => {
  e.target.classList.add('article-animation');
});
