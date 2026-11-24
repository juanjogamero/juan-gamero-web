import { defineConfig } from 'astro/config';

const githubPages = process.env.DEPLOY_TARGET === 'github';

export default defineConfig({
  output: 'static',
  site: githubPages
    ? 'https://juanjogamero.github.io'
    : 'https://metalicasgamero.es',
  base: githubPages ? '/juan-gamero-web/' : '/',
});
