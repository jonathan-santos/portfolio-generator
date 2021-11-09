const htmlmin = require('html-minifier')
const portfolio = require('./src/data/portfolio.json')

const getRoot = () => process.argv.includes('--serve') ? '' : portfolio.root

const getAssetLocation = (assetType, asset) => {
  if (asset.search('http') == -1) {
    return `${getRoot()}/assets/${assetType}/${asset}`
  }

  return asset
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget('./src/styles')

  eleventyConfig.addFilter('relative', (value) => getRoot() + value)

  eleventyConfig.addFilter('asset', (asset) => `${getRoot()}/assets/${asset}`)

  eleventyConfig.addFilter('img', (asset) => getAssetLocation('img', asset))

  eleventyConfig.addFilter('video', (asset) => getAssetLocation('video', asset))

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
