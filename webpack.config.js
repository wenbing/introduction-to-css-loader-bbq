const webpackbbq = require('webpack-bbq');
const values = require('postcss-modules-values');

const config = require('./config');

module.exports = webpackbbq(config)({
  entry: {
    client: require.resolve('./src/client'),
    theming: require.resolve('./src/theming'),
    variables: require.resolve('./src/variables'),
    dialog: require.resolve('./src/dialog'),
  },
  postcss: [ values ],
}, {
  entry: require.resolve('./src/server'),
  postcss: [ values ],
});

