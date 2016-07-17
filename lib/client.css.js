module.exports = {
	"bar": "client__bar___2Keoj",
	"__cssText__": ".client__bar___2Keoj {\n  color: red;\n}\n"
};
if (typeof window !== 'undefined') {
  require('style-loader/addStyles')([[module.id, module.exports.__cssText__]]);
}