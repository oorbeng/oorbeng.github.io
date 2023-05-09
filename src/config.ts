import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "http://wilfredd.me/",
  author: "Wilfred Obeng",
  desc: "The blog of a medical student who is interested in programming",
  title: "Wilfred",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: false,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/wilfredobeng",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:wilfred.obeng7@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/oorbeng",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://t.me/oorbeng",
    linkTitle: `${SITE.title} on Telegram`,
    active: true,
  }
];
