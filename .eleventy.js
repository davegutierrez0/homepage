const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");

  eleventyConfig.addTemplateFormats("css");
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async function(inputContent, inputPath) {
      if (inputPath.includes("tailwind.css")) {
        return async () => {
          let output = await postcss([tailwindcss, autoprefixer]).process(inputContent, { from: inputPath });
          return output.css;
        };
      }
      return () => inputContent;
    }
  });    return {
      dir: {
        input: "src",
        output: "public"
      }
    };
  };