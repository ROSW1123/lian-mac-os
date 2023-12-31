import Terminal from "~/components/apps/Terminal";
import Wolf from "~/components/apps/Wolf";
import Typora from "~/components/apps/Typora";
import type { AppsData } from "~/types";

const apps: AppsData[] = [
  {
    id: "wolf",
    title: "Wolf",
    desktop: true,
    width: 860,
    height: 500,
    show: true,
    y: -40,
    img: "img/icons/wolf.png",
    content: <Wolf />
  },
  {
    id: "typora",
    title: "Typora",
    desktop: true,
    width: 600,
    height: 580,
    y: -20,
    img: "img/icons/typora.png",
    content: <Typora />
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    img: "img/icons/terminal.png",
    content: <Terminal />
  },
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: "img/icons/github.png",
    link: "https://github.com/ROSW1123"
  }
];

export default apps;
