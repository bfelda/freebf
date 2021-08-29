module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("subscribe");
    eleventyConfig.addPassthroughCopy("suprise");
    eleventyConfig.addPassthroughCopy("login");
    eleventyConfig.addPassthroughCopy("resume");
    eleventyConfig.addPassthroughCopy("css");
    
    return {
        passthroughFileCopy: true
    };
};  