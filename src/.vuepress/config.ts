import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Charles的智慧屋",
  description: "烂笔头写下好记性，Charles的智慧屋",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
