let mix = require("laravel-mix");

mix
  .less("src/less/main.less", "dist/zendicons.css")
  .minify("dist/zendicons.css");
