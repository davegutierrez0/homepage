const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = function(eleventyConfig) {
  // Watch for changes in CSS and image directories
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/img/");

  // Passthrough copy for CSS and image directories
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");

  // Custom extension for processing Tailwind CSS
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
      return () => inputContent; // Return unprocessed content for other CSS files
    }
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
