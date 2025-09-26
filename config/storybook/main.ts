import type { StorybookConfig } from '@storybook/react-webpack5';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSVGLoader } from '../build/loaders/buildSVGLoader';
import { DefinePlugin } from 'webpack';

const config: StorybookConfig = {
   "stories": [
      "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
   ],
   "addons": [
      "@storybook/addon-webpack5-compiler-swc",
      "@storybook/addon-docs",
      "@storybook/addon-onboarding",
   ],
   "framework": {
      "name": "@storybook/react-webpack5",
      "options": {}
   },

   webpackFinal: async (config) => {
      const paths: BuildPaths = {
         src: path.resolve(__dirname, '..', '..', 'src'),
         build: '',
         entry: '',
         html: ''
      }
      config.resolve?.modules?.push(paths.src)
      config.resolve?.extensions?.push('.ts', '.tsx')
      config.module?.rules?.push(buildCssLoader({ isDev: true }))
      config.plugins?.push(new DefinePlugin({
         __IS_DEV__: JSON.stringify(true),
         __API__: JSON.stringify(''),
         __PROJECT__: JSON.stringify('storybook')
      }))

      config.module!.rules = config.module?.rules?.map((rule: any) => {
         if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
         }
         return rule
      })

      config.module?.rules?.push(buildSVGLoader())

      return config
   },

};
export default config;