module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("subscribe");
    eleventyConfig.addPassthroughCopy("css");
    
    return {
        passthroughFileCopy: true
    };
};  