module.exports = {
  //配置全局样式SCSS变量
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/typing-effect.scss";`,
      }
    }
  }
}