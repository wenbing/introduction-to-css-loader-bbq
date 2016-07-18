module.exports = {
	"colors": "\"./colors.css\"",
	"blue": "" + require("./colors.css")["blue"] + "",
	"red": "" + require("./colors.css")["red"] + "",
	"green": "" + require("./colors.css")["green"] + "",
	"button": "demo__button___3KlKO " + require("./text.css")["textUnderline"] + "",
	"__cssText__": ".demo__button___3KlKO {\n  color: " + require("./colors.css")["blue"] + ";\n  background-color: " + require("./colors.css")["red"] + ";\n  display: inline-block;\n  /* background-image: url('./demo.png'); */ \n}\n" + require("./colors.css").__cssText__ + require("./text.css").__cssText__
};
if (typeof window !== 'undefined') {
  require('style-loader/addStyles')([[module.id, module.exports.__cssText__]]);
}