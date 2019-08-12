import { $ } from './bling';

const hamburger = $('#header__hamburger');
const navMenu = $('.nav__list');

// Hamburger menu
hamburger.onclick = e => {
  openMenu();
};

function openMenu() {
  navMenu.classList.toggle('open');
}
