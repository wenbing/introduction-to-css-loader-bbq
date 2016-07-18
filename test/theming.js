const tape = require('tape');

const config = require('../config');
const theming = require('../lib/theming');

tape('theming', t => {
  const el = theming.rendera();
  console.error(document.body.outerHTML);
  t.end();
});

