module.exports = {
  build: {
    destination: {
      path: 'dist',
    },
  },

  inlineCSS: {
    enabled: true,
  },

  cleanup: {
    removeUnusedCSS: {
      enabled: true,
    },
    replaceStrings: {
      '\\s?style=""': '',
    },
    preferBgColorAttribute: true,
  },

  prettify: {
    enabled: true,
  },
}
