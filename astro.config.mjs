import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import lit from "@astrojs/lit";
import tailwind from "@astrojs/tailwind";

// remark math and rehype katex
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import addClasses from 'rehype-add-classes';

import netlify from "@astrojs/netlify/functions";


// https://astro.build/config
export default defineConfig({
  
  site: 'https://sparxastronomy.github.io/',
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  sitemap: true,
  // Generate sitemap (set to "false" to disable)

  markdown: {
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    syntaxHighlight: 'prism',
  },

  integrations: [sitemap(), image(), lit(), tailwind(),
    mdx({
      extendDefaultPlugins: true,
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex,
                      [addClasses, {
                        ul: 'list list-disc list-inside pl-4',
                        a: 'text-blue-500 underline underline-offset-8 hover:text-blue-600',
                        }
                      ],
                    ]
      })
  ],

   vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  output: "static",
  // adapter: netlify(),
});