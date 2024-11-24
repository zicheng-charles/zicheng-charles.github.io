import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "深度学习",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "LLMs",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Agent", icon: "pen-to-square", link: "1" },
          { text: "Memory", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "文本生成",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "CTG",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "对话生成",
            icon: "pen-to-square",
            link: "2",
          },
        ],
      },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "机器学习",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
