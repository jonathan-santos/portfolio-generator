const htmlmin = require('html-minifier')

const { getRoot, getRelativePath, getAssetLocation, translate } = require('./src/utils')

const portfolio = require('./src/data/portfolio.json')

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget('./src/styles')

  eleventyConfig.addFilter('relative', (path, lang) => getRelativePath(portfolio.root, path, lang))

  eleventyConfig.addFilter('asset', (asset) => `${getRoot(portfolio.root)}/assets/${asset}`)

  eleventyConfig.addFilter('img', (asset) => getAssetLocation(portfolio.root, 'img', asset))

  eleventyConfig.addFilter('video', (asset) => getAssetLocation(portfolio.root, 'video', asset))

  eleventyConfig.addFilter('translate', (key, lang) => translate(key, lang))

  eleventyConfig.addShortcode('i18n-link', (url, lang, pageLang) => {
    if (lang === pageLang) {
      return `
        <li class='selected' aria-hidden='true'>
          <span>${lang}</span>
        </li>
      `
    }

    const separated = url.split('/').filter(u => u !== '')
    let i18nURL

    if (lang === portfolio.i18n.default) { // '/lang' => '/'
      i18nURL = `/${separated.slice(1).join('/')}`
    } else if (separated.length === 1 || separated.length === 3) { // '/lang/' => '/other-lang/'
      i18nURL = `/${lang}/${separated.slice(1).join('/')}`
    } else if (separated.length === 0 || separated.length === 2) { // '/' => '/lang/'
      i18nURL = `/${lang}/${separated.join('/')}`
    }

    return `
      <li>
        <a href='${i18nURL}'>${lang}</a>
      </li>
    `
  })

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
