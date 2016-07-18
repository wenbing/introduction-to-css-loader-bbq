const webpackbbq = require('webpack-bbq');

const config = require('./config');

module.exports = webpackbbq(config)({
  entry: {
    client: require.resolve('./src/client'),
    theming: require.resolve('./src/theming'),
  },
}, {
  entry: require.resolve('./src/server')
});

