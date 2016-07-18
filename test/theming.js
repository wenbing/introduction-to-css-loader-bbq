const tape = require('tape');

const config = require('../config');
const theming = require('../lib/theming');

tape('theming', t => {
  console.error(document.body.outerHTML);
  t.end();
});

