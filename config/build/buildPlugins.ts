import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins({ paths, isDev, apiUrl, project }: BuildOptions): webpack.WebpackPluginInstance[] {

   const plugins: any[] = [
      new HtmlWebpackPlugin({
         template: paths.html,
      }),
      new MiniCssExtractPlugin({
         filename: 'css/[name].[contenthash:8].css',
         chunkFilename: 'css/[name].[contenthash:8].css',
      }),
      new webpack.DefinePlugin({
         __IS_DEV__: JSON.stringify(isDev),
         __API__: JSON.stringify(apiUrl),
         __PROJECT__: JSON.stringify(project)
      }),

   ].filter(Boolean)

   if (isDev) {
      plugins.push(new webpack.ProgressPlugin())
      plugins.push(new ReactRefreshWebpackPlugin())
      plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }))
   }

   return plugins
}
