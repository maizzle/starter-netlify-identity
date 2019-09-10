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
      '(\\w+=")(\\s)': '$1',
      '\\sstyle[=""]?\\s': ' ',
      '\\sstyle>': '>',
    },
    preferBgColorAttribute: true,
  },

  prettify: {
    enabled: true,
  },
}
