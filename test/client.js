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

tape('composes', t => {
  t.plan(2);
  const r = /(\w+)__bar___(\w+) (\w+)__bgRed___(\w+)/;
  const contents = fs.readFileSync(path.resolve(__dirname, '../public/client.bundle.js'), { encoding: 'utf8' });
  t.ok(r.test(contents), 'public contents is ok');
  t.ok(r.test(require('../lib/client.css').bar), 'lib cssText is ok');
});

