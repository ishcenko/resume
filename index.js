console.log('hello world!');

const showMoreBtn = document.querySelector('#show-more');
const showLessBtn = document.querySelector('#show-less');

showMoreBtn.addEventListener('click', onShowMoreClick);
showLessBtn.addEventListener('click', toggleContent);

function onShowMoreClick() {
  console.log('click on show more');
}

// function toggleContent() {
//   console.log('toggle');
// }
