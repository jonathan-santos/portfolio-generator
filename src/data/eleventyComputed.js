module.exports = {
  projects: (data) => {
    if (!data.lang || data.lang === data.portfolio.i18n.default) {
      return data.portfolio.projects
    }

    return data[data.lang].projects
  },
};
