const htmlmin = require('html-minifier')

const { getRoot, getAssetLocation } = require('./src/utils')

const portfolio = require('./src/data/portfolio.json')

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget('./src/styles')

  eleventyConfig.addFilter('relative', (value) => getRoot(portfolio.root) + value)

  eleventyConfig.addFilter('asset', (asset) => `${getRoot(portfolio.root)}/assets/${asset}`)

  eleventyConfig.addFilter('img', (asset) => getAssetLocation(portfolio.root, 'img', asset))

  eleventyConfig.addFilter('video', (asset) => getAssetLocation(portfolio.root, 'video', asset))

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

  return {
    dir: {
      input: 'src/templates',
      output: 'public',
      data: '../data',
    }, 
  }
}
