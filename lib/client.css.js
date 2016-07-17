module.exports = {
	"bgRed": "client__bgRed___1-zqm",
	"bar": "client__bar___2Keoj client__bgRed___1-zqm " + require("./text.css")["textUnderline"] + "",
	"__cssText__": ".client__bgRed___1-zqm {\n  background-color: red;\n}\n\n.client__bar___2Keoj {\n  color: green;\n}\n\n.baz {\n  background-color: red;\n}\n\n/*\n:global(.baz) {\n  composes: bgRed;\n}\n*/\n\n" + require("./text.css").__cssText__
};
if (typeof window !== 'undefined') {
  require('style-loader/addStyles')([[module.id, module.exports.__cssText__]]);
}