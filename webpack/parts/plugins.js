const getBundleAnalyzerPlugin = require('../plugins/bundle-analyzer-plugin');
const getContextReplacementPlugin = require('../plugins/context-replacement-plugin');
const getDotenvPlugin = require('../plugins/dotenv-plugin');
const getHotModuleReplacementPlugin = require('../plugins/hot-module-replacement-plugin');
const getHtmlWebpackPlugin = require('../plugins/html-webpack-plugin');
const getMiniCssExtractPlugin = require('../plugins/mini-css-extract-plugin');

/**
 @description Returns a list of all connected plugins
 @memberOf module:Parts
 @param {boolean} analyzeMode flag for start bundle-analyzer or not
 @return {Array}
 */
function getBasePlugins(analyzeMode) {
  const plugins = [];
  plugins.push(getHtmlWebpackPlugin());
  plugins.push(getDotenvPlugin());
  plugins.push(getMiniCssExtractPlugin());
  plugins.push(getContextReplacementPlugin());
  plugins.push(getHotModuleReplacementPlugin());
  if (analyzeMode) plugins.push(getBundleAnalyzerPlugin());

  return plugins;
}

module.exports = getBasePlugins;
