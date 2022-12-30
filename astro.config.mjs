import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import lit from "@astrojs/lit";
import tailwind from "@astrojs/tailwind";

// remark math and rehype katex
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  
  site: 'https://sparxastronomy.github.io/',
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  sitemap: true,
  // Generate sitemap (set to "false" to disable)

  integrations: [sitemap(), image(), lit(), tailwind(), mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  })],

   vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  output: "static",
  // adapter: netlify(),
});