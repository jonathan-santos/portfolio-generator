const getRoot = (root) => process.argv.includes('--serve') ? '' : root

const getAssetLocation = (root, assetType, asset) => {
  if (asset.search('http') == -1) {
    return `${getRoot(root)}/assets/${assetType}/${asset}`
  }

  return asset
}

const translate = (locale, key) => {
  const translations = require(`../data/${locale}.json`)
  return key
    .split('.')
    .reduce((a, b) => a[b], translations)
}

module.exports = {
  getRoot,
  getAssetLocation,
  translate
}
