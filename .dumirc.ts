import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/MChoice/',
  publicPath: '/MChoice/',
  themeConfig: {
    name: 'MChoice',
    showLineNum: true,
    socialLinks: {
      github: 'https://github.com/maodaisuki/MChoice',
    },
  },
});
