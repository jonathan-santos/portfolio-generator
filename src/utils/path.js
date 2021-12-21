const portfolio = require('../data/portfolio.json')

const getRootPath = () => process.argv.includes('--serve') || !portfolio.root ? '' : portfolio.root

const getRelativePath = (path, lang) => {
  if (!lang || !portfolio.i18n || lang === portfolio.i18n.default) {
    return getRootPath() + path
  }

  return `${getRootPath()}/${lang}${path}`
}

const getAssetPath = (assetType, asset) => {
  if (asset.search('http') !== -1) {
    return asset
  }
  
  return `${getRootPath()}/assets/${assetType}/${asset}`
}

module.exports = {
  getRootPath,
  getRelativePath,
  getAssetPath,
}
