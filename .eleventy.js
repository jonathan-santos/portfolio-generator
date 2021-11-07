const portfolio = require('./data/portfolio.json')

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

  eleventyConfig.addPassthroughCopy('src/assets')

  return {
    dir: {
      input: 'src',
      output: 'public',
      data: '../data',
    },
  }
}
