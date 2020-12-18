const plugins = []
const elementUI = [
  "component",
  {
    "libraryName": "element-ui",
    "styleLibraryName": "theme-chalk"
  }
]
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console')
}
plugins.push(elementUI)

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: plugins
}
