import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/ROSW1123"
      },
      {
        id: "my-google-scholar",
        title: "Scholar",
        img: "img/sites/google-scholar.svg",
        link: "https://scholar.google.com/"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:starwarsrogueone1123@gmail.com"
      }
    ]
  }
};

export default websites;
