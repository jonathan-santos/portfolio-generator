module.exports = {
  projects: (data) => {
    let projects

    if (!data.lang || data.lang === data.portfolio.i18n.default) {
      projects = data.portfolio.projects
    } else {
      projects = data[data.lang].projects
    }

    if (data['filter-type'] === 'category') {
      projects = projects.filter(project => project.category === data.filter.name)
    } else if (data['filter-type'] === 'tag') {
      projects = projects.filter(project => project.tags && project.tags.includes(data.filter.name))
    }

    return projects
  },
};
