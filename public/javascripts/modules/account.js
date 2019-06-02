import { $ } from './bling';
import { $$ } from './bling';

const checkbox = $('#passedTest');
const accountStatus = $('.account__status');

function addInitialStatus() {
  
  console.log('CHECKED??', checkbox.checked);
}

addInitialStatus();

// Hamburger menu
checkbox.onclick = (e) => {
  console.log(e); 
  console.log(e.target.checked);
  
};

// function openMenu() {
// // console.log(navMenu);
// navMenu.classList.toggle('open');
// }
