import webpack from 'webpack';
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import path from "path";


export default (env: BuildEnv) => {


   const paths: BuildPaths = {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src')
   }

   const mode = env.mode || 'development';
   const isDev = mode === 'development';
   const PORT = env.port || 3000;
   const apiUrl = env.apiUrl || 'https://big.baby.table.mooo.com/api/'
   const socketUrl = env.socketUrl || 'https://big.baby.table.mooo.com/'

   const config: webpack.Configuration = buildWebpackConfig({
      mode,
      paths,
      isDev,
      port: PORT,
      apiUrl,
      socketUrl,
      project: 'frontend'
   })

   return config;
};
