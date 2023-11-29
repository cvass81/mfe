const { merge } = require('webpack-merge');
const HtmlWepbackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: { index: 'index.html' },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/bootstrap.js',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWepbackPlugin({ template: './public/index.html' }),
  ],
};

module.exports = merge(commonConfig, devConfig);
