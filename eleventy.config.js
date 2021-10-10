const portfolio = require('./data/portfolio.json')

const getRoot = () => {
  if (process.env.NODE_ENV === 'dev') {
    return ''
  }

  return portfolio.root
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('relative', (value) => getRoot() + value)

  eleventyConfig.addFilter('asset', (value) => `${getRoot()}/assets/${value}`)

  eleventyConfig.addFilter('img', (value) => {
    if (value.search('http') == -1) {
      return `${getRoot()}/assets/img/${value}`
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
