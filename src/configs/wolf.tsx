import type { WolfData } from "~/types";

const wolf: WolfData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:user",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-fa-solid:dragon",
        excerpt: "Hey there! I'm a creature arriving in this aeon"
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here is the status of my github account ~~~"
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-fa-solid:window-maximize",
        excerpt: "This portfolio website thanks to ..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:globe",
    md: [
      {
        id: "test",
        title: "Test",
        file: "https://bafkreibkt45fik4btex54n427few2r5tiggzrzswnf4nnrgrihfkrnekdu.ipfs.nftstorage.link/",
        icon: "i-heroicons-solid:pencil-alt",
        excerpt: "Markdown syntax",
        link: "https://www.markdownguide.org/basic-syntax/"
      },
      {
        id: "nft",
        title: "NFT Generator Go",
        file: "markdown/commerce.md",
        icon: "i-mdi:art",
        excerpt: "Go Gen NFTs",
        link: "https://github.com/rosw1123/terminal-nft-generator"
      }
    ]
  }
];

export default wolf;
