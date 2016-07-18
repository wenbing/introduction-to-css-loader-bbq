'use strict';

var _themeA = require('./theme-a.css');

var _themeA2 = _interopRequireDefault(_themeA);

var _themeB = require('./theme-b.css');

var _themeB2 = _interopRequireDefault(_themeB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(theme) {
  var el = document.createElement('div');
  el.textContent = 'hello';
  document.body.appendChild(el);
  el.classList.add(theme.inner);
  document.body.classList.add(theme.outer);
  return el;
}

render(_themeB2.default);