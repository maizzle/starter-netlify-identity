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
      '\\s(style|class)(=""|(?=>)|(?=\\s))+': '',
    },
  },

  prettify: {
    enabled: true,
  },
}
