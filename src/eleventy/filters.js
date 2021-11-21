const { getRootPath, getRelativePath, getAssetPath } = require('../utils/path')
const { translate } = require('../utils/translation')

const addFilters = (eleventyConfig) => {
  eleventyConfig.addFilter('relative', (path, lang) => getRelativePath(path, lang))

  eleventyConfig.addFilter('asset', (asset) => `${getRootPath()}/assets/${asset}`)

  eleventyConfig.addFilter('img', (asset) => getAssetPath('img', asset))

  eleventyConfig.addFilter('video', (asset) => getAssetPath('video', asset))

  eleventyConfig.addFilter('translate', (key, lang) => translate(key, lang))
}

module.exports = addFilters
