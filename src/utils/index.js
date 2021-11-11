const translations = require('../data/translations.json')

const getRoot = (root) => process.argv.includes('--serve') ? '' : root

const getAssetLocation = (root, assetType, asset) => {
  if (asset.search('http') == -1) {
    return `${getRoot(root)}/assets/${assetType}/${asset}`
  }

  return asset
}

const translate = (locale, key) => translations[locale.toLowerCase()][key]

module.exports = {
  getRoot,
  getAssetLocation,
  translate
}
