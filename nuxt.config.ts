// https://nuxt.com/docs/api/configuration/nuxt-config
import { siteConfig } from './site.config'
import { defineNuxtConfig } from 'nuxt/config'
import { presetUno, presetIcons } from 'unocss'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/stylelint-module',
  ],
  unocss: {
    presets: [
      presetUno(),
      presetIcons({
        scale: 1.2,
        extraProperties: {
          display: 'inline-block',
          'vertical-align': 'middle',
        },
      }),
    ],
  },
  app: {
    rootId: 'Hutiger-s-blog',
    head: {
      meta: [
        { name: 'description', content: siteConfig.description },
        { name: 'author', content: siteConfig.author },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { charset: 'UTF-8' },
        { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge' },
      ],
      noscript: [
        { children: 'JavaScript is required' },
      ],
      script: [
        {
          src: 'https://cn.vercount.one/js',
          defer: true,
        },
      ],
      htmlAttrs: {
        lang: siteConfig.lang,
      },
      bodyAttrs: {
        class: 'font-sans',
      },
    },
  },
  nitro: {
    preset: 'static'
  }, 
  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'vitesse-light',
        // Theme used if `html.dark`
        dark: 'vitesse-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
      preload: [
        'c',
        'cpp',
        'java',
      ],

    },
  },
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/styles/global.scss',
    '@/assets/styles/theme.css',
    '@/assets/styles/transition.css',
    '@/assets/styles/markdown.scss',
  ],
  stylelint: {
    /* module options */
    lintOnStart: false,
  },
  
})
