// 用于强制所有模块的完整路径必需与磁盘上实际路径的确切大小写相匹配
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

// 识别某些类型的 webpack 错误并整理，以提供开发人员更好的体验。
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

// 将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 用于在 webpack 构建期间优化、最小化 CSS文件
const OptimizeCssnanoPlugin = require('optimize-css-assets-webpack-plugin');

// webpack 内置插件，用于根据模块的相对路径生成 hash 作为模块 id, 一般用于生产环境
const { HashedModuleIdsPlugin } = require('webpack');

// 用于将单个文件或整个目录复制到构建目录
const CopyWebpackPlugin = require('copy-webpack-plugin');

// 用于做相应的合并处理
const merge = require('webpack-merge');

const utils = require('./build/utils');

module.exports = {
  runtimeCompiler: true,
  publicPath: '/',
  productionSourceMap: true,
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 8000,
    https: false,
    // 提供在服务器内部的其他中间件之前执行自定义中间件的能力
    before: app => {
      // `app` 是一个 express 实例
    },
  },
  configureWebpack: {
    plugins: [      
      new CaseSensitivePathsPlugin(),
      
      new FriendlyErrorsPlugin(),
      
      new MiniCssExtractPlugin(),
      
      new OptimizeCssnanoPlugin(),
      
      new HashedModuleIdsPlugin(),
      
      new CopyWebpackPlugin()
    ]
  },
  // config 参数为已经解析好的 webpack 配置
  chainWebpack: config => {
    config.module
        .rule('images')
        .use('url-loader')
        .tap(options =>
            merge(options, {
              limit: 5120, // 修改 webpack 中 module 项里配置 rules 规则为图片下的 url-loader 值，将其 limit 限制改为 5M
            })
        )
  },

  pages: utils.setPages()
  
}