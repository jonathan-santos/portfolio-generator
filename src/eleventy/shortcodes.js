const portfolio = require('../data/portfolio.json')

const { getRootPath } = require('../utils/path')

const addShortcodes = (eleventyConfig) => {
  eleventyConfig.addShortcode('i18n-link', (url, lang, pageLang) => {
    if (lang === pageLang) {
      return `
        <li class='selected' aria-hidden='true'>
          <span>${lang}</span>
        </li>
      `
    }

    const separated = url.split('/').filter(u => u !== '')
    let i18nURL = getRootPath()

    if (lang === portfolio.i18n.default) { // '/lang' => '/'
      i18nURL += `/${separated.slice(1).join('/')}`
    } else if (separated.length === 1 || separated.length === 3) { // '/lang/' => '/other-lang/'
      i18nURL += `/${lang}/${separated.slice(1).join('/')}`
    } else if (separated.length === 0 || separated.length === 2) { // '/' => '/lang/'
      i18nURL += `/${lang}/${separated.join('/')}`
    }

    return `
      <li>
        <a href='${i18nURL}'>${lang}</a>
      </li>
    `
  })
}

module.exports = addShortcodes
