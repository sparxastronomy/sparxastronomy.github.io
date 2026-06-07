import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';


import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import fs from "node:fs"

// remark math and rehype katex
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';



import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({

  site: 'https://sparxastronomy.netlify.app/',
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  sitemap: true,
  // Generate sitemap (set to "false" to disable)

  markdown: {
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    // syntaxHighlight: 'prism',
    shikiConfig: {
      theme: JSON.parse(fs.readFileSync("./houston.theme.json", { encoding: "utf-8" })),
    },
  },
  image: {
    domains: ["ik.imagekit.io"],
    layout: "fixed",
  },
  integrations: [
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(
      // Old remark and rehype plugins
      // {
      //   remarkPlugins: [remarkMath],
      //   rehypePlugins: [rehypeKatex,]
      // }

      // ASTRO v6 unified plugins
      {
        processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
      }
    ),
    icon(),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },

  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  output: "static",
  // adapter: netlify(),
});