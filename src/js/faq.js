const icon = document.querySelector('.more__icon');
const more = document.querySelector('.more');
const active = document.querySelector('.active');

more.addEventListener('click', addMore);

function addMore() {
  active.classList.toggle('visually-hidden');
  icon.classList.toggle('more__icon-active');
}
const icon2 = document.querySelector('.more__icon-2');
const more2 = document.querySelector('.more-2');
const active2 = document.querySelector('.active-2');

more2.addEventListener('click', addMore2);

function addMore2() {
  active2.classList.toggle('visually-hidden');
  icon2.classList.toggle('more__icon-active');
}
const icon3 = document.querySelector('.more__icon-3');
const more3 = document.querySelector('.more-3');
const active3 = document.querySelector('.active-3');

more3.addEventListener('click', addMore3);

function addMore3() {
  active3.classList.toggle('visually-hidden');
  icon3.classList.toggle('more__icon-active');
}
const icon4 = document.querySelector('.more__icon-4');
const more4 = document.querySelector('.more-4');
const active4 = document.querySelector('.active-4');

more4.addEventListener('click', addMore4);

function addMore4() {
  active4.classList.toggle('visually-hidden');
  icon4.classList.toggle('more__icon-active');
}
const icon5 = document.querySelector('.more__icon-5');
const more5 = document.querySelector('.more-5');
const active5 = document.querySelector('.active-5');

more5.addEventListener('click', addMore5);

function addMore5() {
  active5.classList.toggle('visually-hidden');
  icon5.classList.toggle('more__icon-active');
}
