const element = document.getElementsByClassName('article');

for (let i = 0; i < element.length; i += 1) {
  element[i].addEventListener('click', function (e) {
    e.target.classList.add('growClass');
  });
}
