const htmlmin = require('html-minifier')

const addFilters = require('./src/eleventy/filters')
const addShortcodes = require('./src/eleventy/shortcodes')

module.exports = (eleventyConfig) => {
  addFilters(eleventyConfig)

  addShortcodes(eleventyConfig)

  eleventyConfig.addWatchTarget('./src/styles')

  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' })

  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      })
    }

    return content
  })

  eleventyConfig.setBrowserSyncConfig({
    port: 3000
  })

  return {
    dir: {
      input: 'src/templates',
      output: 'public',
      data: '../data',
    }, 
  }
}
