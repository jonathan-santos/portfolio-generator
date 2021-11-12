const htmlmin = require('html-minifier')

const { getRoot, getRelativePath, getAssetLocation, translate } = require('./src/utils')

const portfolio = require('./src/data/portfolio.json')

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget('./src/styles')

  eleventyConfig.addFilter('relative', (path, lang) => getRelativePath(portfolio.root, path, lang))

  eleventyConfig.addFilter('asset', (asset) => `${getRoot(portfolio.root)}/assets/${asset}`)

  eleventyConfig.addFilter('img', (asset) => getAssetLocation(portfolio.root, 'img', asset))

  eleventyConfig.addFilter('video', (asset) => getAssetLocation(portfolio.root, 'video', asset))

  eleventyConfig.addFilter('translate', (key, locale) => translate(locale, key))

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
