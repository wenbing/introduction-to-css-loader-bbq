const fs = require('fs');
const path = require('path');

const tape = require('tape');

const config = require('../config');

tape(42, (t) => {
  t.end();
});

tape('public', t => {
  t.plan(2)

  const red = 'color: red;';
  const contents = fs.readFileSync(path.resolve(__dirname, '../public/client.bundle.js'), { encoding: 'utf8' });
  t.ok(contents.indexOf(red) !== -1, 'public contents is ok');
  t.ok(require('../lib/client.css.js').__cssText__.indexOf(red) !== -1, 'lib cssText is ok');
});


