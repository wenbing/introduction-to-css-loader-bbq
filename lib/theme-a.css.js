module.exports = {
	"outer": "theme-a__outer___17WEL",
	"inner": "theme-a__inner___vqwuf",
	"__cssText__": ".theme-a__outer___17WEL { background: green; }\n.theme-a__inner___vqwuf { color: blue; }\n"
};
if (typeof window !== 'undefined') {
  require('style-loader/addStyles')([[module.id, module.exports.__cssText__]]);
}