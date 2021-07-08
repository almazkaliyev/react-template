const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/**
 * @description Returns HtmlWebpackPlugin. It construct html file based on template
 * @memberOf module:Plugins
 * @return {HtmlWebpackPlugin}
 * @see https://www.npmjs.com/package/html-webpack-plugin
 */
function getHtmlWebpackPlugin() {
  return new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../../public', 'index.html'),
    favicon: path.resolve(__dirname, '../../public', 'favicon.ico'),
  });
}

module.exports = getHtmlWebpackPlugin;
