module.exports = {
  "plugins": {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      unitPrecision: 6,
      rootValue: 37.5, // vant UI Root=37.5
      propList: ['*']
    }
  }
}
