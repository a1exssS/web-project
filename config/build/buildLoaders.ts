import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildSVGLoader } from "./loaders/buildSVGLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

   const svgLoader = buildSVGLoader()

   const fileLoader = {
      test: /\.(png|jpe?g|gif|woff2|woff)$/i,
      use: [
         {
            loader: 'file-loader',
         },
      ],
   }

   const babelLoader = {
      test: /\.[jt]sx?$/,
      exclude: /node_modules/,
      use: {
         loader: 'babel-loader',
         options: {
            plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
            targets: "defaults",
            presets: [
               ['@babel/preset-env']
            ]
         }
      }
   }

   const cssLoader = buildCssLoader({ isDev })

   // Если не используем тайпскрипт - нужен babel-loader
   const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   }

   return [
      babelLoader,
      svgLoader,
      fileLoader,
      cssLoader,
      typescriptLoader,
   ]
}
