const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  //eleventyConfig.addWatchTarget("./src/sass/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
