const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.header__nav-container');
const iconClose = document.querySelector('.menu-close');
const body = document.querySelector('body');

iconMenu.addEventListener('click', mobMenu);
iconClose.addEventListener('click', mobMenu);
function mobMenu() {
  iconMenu.classList.toggle('_active');
  menuBody.classList.toggle('_active');
  iconClose.classList.toggle('_active');
  body.classList.toggle('no-scroll');
  // document.addEventListener('keydown', onEscBtnPress);
}
// function onEscBtnPress(e) {
//   if (e.code === 'Escape') {
//     document.removeEventListener('keydown', onEscBtnPress);
//   }
// }
