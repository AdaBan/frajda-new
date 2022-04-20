module.exports = config => {
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // Tell 11ty to open the browser on serve
  config.setBrowserSyncConfig({
    open: true
  });

  // Tell 11ty which files should trigger hot-reload on serve
  config.addWatchTarget('./src/scss/');

  // https://www.11ty.dev/docs/copy/
  config.addPassthroughCopy('./src/assets/');

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};