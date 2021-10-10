const portfolio = require('./data/portfolio.json')

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('relative', (value) => portfolio.root + value)

  eleventyConfig.addFilter('asset', (value) => `${portfolio.root}/assets/${value}`)

  eleventyConfig.addFilter('img', (value) => {
    if (value.search('http') == -1) {
      return `${portfolio.root}/assets/img/${value}`
    }

    return value
  })

  eleventyConfig.addPassthroughCopy('src/assets')

  return {
    dir: {
      input: 'src',
      output: 'public',
      data: '../data',
    },
  }
}
