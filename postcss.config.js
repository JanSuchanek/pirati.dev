module.exports = {
  plugins: {
    autoprefixer: {}
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/'

}
