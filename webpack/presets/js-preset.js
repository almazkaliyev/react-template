const getBabelLoader = require('../loaders/babel-loader');

/**
 * Returns a flow for process js and jsx input
 * @memberOf module:Presets
 * @return {Preset}
 */
function getJavaScriptPreset() {
  return {
    test: /\.(js|jsx)$/,
    use: [getBabelLoader()],
  };
}
module.exports = getJavaScriptPreset;
