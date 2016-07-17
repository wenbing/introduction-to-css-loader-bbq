if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'development';
}
var basedir = __dirname;
var outputdir = __dirname + '/public';
var publicPath = '/';

module.exports = {
  basedir,
  outputdir,
  publicPath,
}
