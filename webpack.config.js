import dotenv from 'dotenv';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const NODE_ENV = process.env.NODE_ENV;

dotenv.config({ path: `.env.${NODE_ENV}` });

export default {
  entry: {
    bundle: [path.join(process.cwd(), 'source/client')]
  },
  output: {
    path: path.join(process.cwd(), 'public/client'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.DefinePlugin(
      Object.entries(process.env).reduce((memo, [key, value]) => {
        return {
          ...memo,
          [`globalThis.${key}`]: JSON.stringify(value)
        };
      }, {})
    )
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                [
                  '@babel/preset-react',
                  { runtime: 'automatic', importSource: '@emotion/react' }
                ]
              ],
              plugins: ['@emotion/babel-plugin']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        exclude: /node_modules/,
        use: 'file-loader'
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  devServer: {
    hot: true,
    liveReload: true,
    historyApiFallback: true,
    client: {
      overlay: {
        warnings: false
      }
    }
  },
  resolve: {
    alias: {
      client: path.join(process.cwd(), 'source/client')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: '_bundle'
        }
      }
    }
  },
  devtool: 'source-map'
};
