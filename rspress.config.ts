import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/blogs/',
  title: 'nil随笔',
  // icon: '/rspress-icon.png',
  icon: 'https://avatars.githubusercontent.com/u/56892468?s=200&v=4',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  // logo: 'https://avatars.githubusercontent.com/u/56892468?s=200&v=4',
  markdown: {
    showLineNumbers: true,
    defaultWrapCode: true,
  },
  themeConfig: {
    // 开启 View Transition 过渡
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
    socialLinks: [
      // {
      //   icon: 'github',
      //   mode: 'link',
      //   content: 'https://github.com/web-infra-dev/rspress',
      // },
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
});
