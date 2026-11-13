import { defineConfig } from 'astro/config';

const github = process.env.DEPLOY_TARGET === 'github';
const [owner = 'juanjogamero', repository = 'juan-gamero-web'] =
  (process.env.GITHUB_REPOSITORY || 'juanjogamero/juan-gamero-web').split('/');

export default defineConfig({
  output: 'static',
  site: github ? `https://${owner}.github.io` : 'https://metalicasgamero.es',
  base: github ? `/${repository}/` : '/',
});
