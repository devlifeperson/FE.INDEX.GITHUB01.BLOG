import { publicEnv } from "./public-env";

export const siteConfig = {
  name: "Index Blog",
  description: "Index Blog",
  canonical: publicEnv.SITE_URL,
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
};
