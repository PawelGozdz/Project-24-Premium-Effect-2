import { $$ } from './bling';

const checkboxes = $$('input[type="checkbox"]');

checkboxes.on('click', e => {
  const t = e.target;
  t.checked === true ? t.checked === false : t.checked === true;
});
