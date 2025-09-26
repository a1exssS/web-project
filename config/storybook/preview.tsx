import '../../src/app/styles/index.scss'
import type { Preview } from '@storybook/react-webpack5'
import { RouterDecorator } from '../../src/shered/config/storybook/RouterDecorator/RouterDecorator.tsx'
import { ThemeDecorator } from '../../src/shered/config/storybook/ThemeDecorator/ThemeDecorator.tsx'

const preview: Preview = {
   parameters: {
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },
   },
   decorators: [
      ThemeDecorator("light_theme"),
      RouterDecorator()
   ]
};

export default preview;