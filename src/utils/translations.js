const portfolio = require('../data/portfolio.json')
const translations = require('../data/translations.json')

const getPageLang = (page) => {
  const filePathSeparated = page.filePathStem.split('/').filter(u => u !== '')

  if (filePathSeparated.length === 1) {
    return portfolio.i18n.default
  }
  
  return filePathSeparated[0]
}

const translate = (key, lang) => {
  return translations[lang][key]
}

module.exports = {
  getPageLang,
  translate
}
