const getPortfolio = (data) => {
  if (!data.lang || data.lang === data.portfolio.i18n.default) {
    return data.portfolio
  }

  return data[data.lang]
}

module.exports = {
  name: (data) => getPortfolio(data).name,
  description: (data) => getPortfolio(data).description,
  categories: (data) => getPortfolio(data).categories,
  tags: (data) => getPortfolio(data).tags,
  projects: (data) => {
    let projects = getPortfolio(data).projects

    if (data['filter-type'] === 'category') {
      projects = projects.filter(project => project.category === data.filter.name)
    } else if (data['filter-type'] === 'tag') {
      projects = projects.filter(project => project.tags && project.tags.includes(data.filter.name))
    }

    return projects
  },
};
