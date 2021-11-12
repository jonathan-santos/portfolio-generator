const portfolio = require('../data/portfolio.json')
const translations = require('../data/translations.json')

const getRoot = (root) => process.argv.includes('--serve') ? '' : root

const getRelativePath = (root, path, lang) => {
  if (!lang || lang === portfolio.i18n.default) {
    return getRoot(root) + path
  }

  return `${getRoot(root)}/${lang}${path}`
}

const getAssetLocation = (root, assetType, asset) => {
  if (asset.search('http') == -1) {
    return `${getRoot(root)}/assets/${assetType}/${asset}`
  }

  return asset
}

const translate = (locale, key) => translations[locale][key]

module.exports = {
  getRoot,
  getRelativePath,
  getAssetLocation,
  translate
}
