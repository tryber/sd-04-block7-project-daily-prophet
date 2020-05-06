// const addPageScrollEvent = (type) => {
//   if (type === 'desktop') {
//     window.addEventListener('scroll', () => {
//       const viewportBottom = window.scrollY + window.innerHeight;
//       if (viewportBottom > decree1Middle) {
//         document.querySelector('.decree-1').classList.add('decree-animation');
//         document.querySelector('.decree-26').classList.add('decree-animation');
//       } else if (viewportBottom < decree1Middle) {
//         document.querySelector('.decree-1').classList.remove('decree-animation');
//         document.querySelector('.decree-26').classList.remove('decree-animation');
//       }
//     });
//   } else {
//     window.addEventListener('scroll', () => {
//       const viewportBottom = window.scrollY + window.innerHeight;

//       if (viewportBottom > decree1Middle) {
//         if (!document.querySelector('.decree-1').classList.contains('decree-animation')) {
//           document.querySelector('.decree-1').classList.add('decree-animation');
//         }
//         if (viewportBottom > decree26Middle) {
//           if (!document.querySelector('.decree-26').classList.contains('decree-animation')) {
//             document.querySelector('.decree-26').classList.add('decree-animation');
//           }
//         }
//       } else if (viewportBottom < decree1Middle) {
//         document.querySelector('.decree-1').classList.remove('decree-animation');
//         document.querySelector('.decree-26').classList.remove('decree-animation');
//       }
//     });
//   }
// };

// window.onload = () => {
//   const decree1Distances = document.querySelector('.decree-1').getBoundingClientRect();
//   const decree1Middle = Math.floor((decree1Distances.top
//     + (decree1Distances.height * (2 / 3))));
//   const decree26Distances = document.querySelector('.decree-26').getBoundingClientRect();
//   const decree26Middle = Math.floor((decree26Distances.top
//     + (decree26Distances.height * (2 / 3))));

//   if (window.innerWidth > 1000) {
//   } else {
//   }
// };

// const animateDecrees = (type) => {

// }
const animateArticles = () => {
  const articles = document.querySelectorAll('article');

  articles.forEach((article) => {
    article.addEventListener('click', (e) => {
      e.target.style.animationName = 'article-grow';
      e.target.style.animationDuration = '4s';
      e.target.style.animationFillMode = 'forwards';
      e.target.style.animationTimingFunction = 'steps(20, end)';
    });
  });
};

window.onload = () => {
  animateArticles();
};
