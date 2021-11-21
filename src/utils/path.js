const portfolio = require('../data/portfolio.json')

const getRootPath = (root) => process.argv.includes('--serve') ? '' : root

const getRelativePath = (root, path, lang) => {
  if (!lang || lang === portfolio.i18n.default) {
    return getRoot(root) + path
  }

  return `${getRoot(root)}/${lang}${path}`
}

const getAssetPath = (root, assetType, asset) => {
  if (asset.search('http') !== -1) {
    return asset
  }
  
  return `${getRoot(root)}/assets/${assetType}/${asset}`
}

module.exports = {
  getRootPath,
  getRelativePath,
  getAssetPath,
}
