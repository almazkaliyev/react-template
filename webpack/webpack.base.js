const entryOutput = require('./parts/entry-output');
const getBasePlugins = require('./parts/plugins');
const getResolve = require('./parts/resolve');
const getCssPreset = require('./presets/css-preset');
const getFilePreset = require('./presets/file-preset');
const getJavaScriptPreset = require('./presets/js-preset');
const getSVGPreset = require('./presets/svg-preset');

const analyzeMode = !!process.env.analyze;

module.exports = {
  ...entryOutput(),
  devtool: 'cheap-module-source-map',
  module: {
    rules: [getJavaScriptPreset(), getCssPreset(), getFilePreset(), getSVGPreset()],
  },
  plugins: getBasePlugins(analyzeMode),
  optimization: {
    runtimeChunk: true,
  },
  resolve: getResolve(),
};
