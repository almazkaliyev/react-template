const getOptimization = require('./parts/optimization');
const getBrotliPlugin = require('./plugins/brotli-plugin');
const getImageminPlugin = require('./plugins/imagemin-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: getOptimization(),
  plugins: [getImageminPlugin(), getBrotliPlugin()],
};
