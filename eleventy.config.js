const portfolio = require('./data/portfolio.json')

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('relativeLink', (value) => portfolio.root + value)

  eleventyConfig.addFilter('assetLink', (value) => {
    if (value.search('http') == -1) {
      return `${portfolio.root}/assets/${value}`
    }

    return value
  })

  return {
    dir: {
      input: 'src',
      output: 'public',
      data: '../data',
    },
  }
}
