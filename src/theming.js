import a from './theme-a.css';
import b from './theme-b.css';

function render(theme) {
  var el = document.createElement('div');
  el.textContent = 'hello';
  document.body.appendChild(el);
  el.classList.add(theme.inner);
  document.body.classList.add(theme.outer);
  return el;
}

render(b);
