const i18n = require('eleventy-plugin-i18n');
// const translations = require('./src/_data/i18n/index.js');

module.exports = (config) => {
  config.addPlugin(i18n, {
    translations: {
      hello: {
        'en-GB': 'Hello',
        'fr-FR': 'Bonjour'
      }
    },
    fallbackLocales: {
      'fr-FR': 'en-GB'
    }
  });

  config.addPassthroughCopy({ public: './' })

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })

  config.setDataDeepMerge(true)

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: 'njk'
  }
}
