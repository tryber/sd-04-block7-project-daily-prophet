window.onload = function () {
  const articleAnimationElement = document.getElementsByClassName('article-grow');
  articleAnimationElement[0].addEventListener('click', function () {
    // e.preventDefault;
    articleAnimationElement[0].classList.add('play');
    const delayInMilliseconds = 4100;
    setTimeout(function () {
      articleAnimationElement[0].classList.remove('play');
      articleAnimationElement[0].classList.remove('article-animation');
      articleAnimationElement[0].offsetWidth = undefined;
      // let foo = articleAnimationElement[0].offsetWidth;
      // foo = undefined;
      // articleAnimationElement[0].classList.add('article-animation');
      // const test = foo + delayInMilliseconds;
      // console.log(test);
      // articleAnimationElement[0].classList.add('afterPlay');
      // articleAnimationElement[0].articleAnimationElement.add.
    }, delayInMilliseconds);
    // let delay2 = delayInMilliseconds + 100;
    // setTimeout(function() {
    //   articleAnimationElement[0].classList.remove('play');
    //   }, delay2);
  });
};
