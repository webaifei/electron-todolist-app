
const path = require('path');
const merge = require('webpack-merge');
const { spawn } = require('child_process');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

module.exports = merge.smart(baseConfig, {
  devtool: 'inline-source-map',
  mode: 'production',
  target: 'electron-preload',
  entry: {
    preload: path.resolve(__dirname, '../../src/preload/index.ts')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].dev.js',
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 用于启动HMR时可以显示模块的相对路径
    new webpack.HotModuleReplacementPlugin(), // hot module replacement 启动模块热替换的插件
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ]
});
