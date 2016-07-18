module.exports = {
	"outer": "theme-b__outer___PYOM9",
	"inner": "theme-b__inner___1jGzA",
	"__cssText__": ".theme-b__outer___PYOM9 { background: red; }\n.theme-b__inner___1jGzA { color: yellow; }\n"
};
if (typeof window !== 'undefined') {
  require('style-loader/addStyles')([[module.id, module.exports.__cssText__]]);
}