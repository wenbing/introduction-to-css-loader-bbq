const webpackbbq = require('webpack-bbq');

const config = require('./config');

module.exports = webpackbbq(config)({
  entry: require.resolve('./src/client'),
});

