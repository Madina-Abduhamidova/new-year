let bodyEl = document.querySelector(`.body-light`);
let imgEl = document.querySelector(`.moon-d`);
let imgLEl = document.querySelector(`.moon-l`);
let logo = document.querySelector(`.logo-t`);
let home = document.querySelector(`.home`);
let gift = document.querySelector(`.gift`);
let celeb = document.querySelector(`.celeb`);
let neww = document.querySelector(`.new`);
let darkTitleEl = document.querySelector(`.archa-title`);
let darkTextEl = document.querySelector(`.archa-text`);

function mod() {
  bodyEl.classList.toggle(`body-dark`);
  logo.classList.toggle(`link-dark`);
  home.classList.toggle(`link-dark`);
  gift.classList.toggle(`link-dark`);
  celeb.classList.toggle(`link-dark`);
  neww.classList.toggle(`link-dark`);
  darkTitleEl.classList.toggle(`title-dark`);
  darkTextEl.classList.toggle(`text-dark`);
  imgEl.classList.toggle(`moon-d`);
  imgLEl.classList.toggle(`moon-d`);
}
