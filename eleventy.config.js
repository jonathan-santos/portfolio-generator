const portfolio = require('./data/portfolio.json')

module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter('relativeLink', (value) => {
        return portfolio.root + value
    })

    eleventyConfig.addFilter("assetLink", (value) => {
        if(value.search('http') == -1)
            value = `${portfolio.root}/assets/${value}`

        return value
    })
    
    return {
            dir: {
            input: "src",
            output: "public",
            data: "../data"
        }
    }
}