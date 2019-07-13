import { $ } from './bling';
import { $$ } from './bling';

const checkboxes = $$('input[type="checkbox"]'),
  accountStatus = $('.account__status');

checkboxes.on('click', (e) => {
  // e.preventDefault();
  const t = e.target;
  // e.target.checked = true;
  t.checked === true ? t.checked === false : t.checked === true;
  // t.checked = !t.checked;
  console.log(e.target.checked);
});

function addInitialStatus() {
  
  console.log('CHECKED??', checkboxes);
}

addInitialStatus();

// Hamburger menu
// checkbox.onclick = (e) => {
//   console.log(e); 
//   console.log(e.target.checked);
  
// };

// function openMenu() {
// // console.log(navMenu);
// navMenu.classList.toggle('open');
// }
