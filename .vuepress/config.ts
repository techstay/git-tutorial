import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

import { searchPlugin } from "@vuepress/plugin-search";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "落落的git教程",
      description: "一个简单易学的git教程",
    },
  },

  theme,

  shouldPrefetch: false,
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
    googleAnalyticsPlugin({
      id: 'G-JRYG8DRJB9',
    }),
  ],
});
