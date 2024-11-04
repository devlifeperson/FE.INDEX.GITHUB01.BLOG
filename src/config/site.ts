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
  socialLinks: {
    instagram: "https://www.instagram.com/devlife_solution",
    linkedin: "https://www.linkedin.com/in/devlife-solutions",
    facebook: "https://www.facebook.com/profile.php?id=61567434645035",
    youtube: "https://www.youtube.com/@DevlifeSolutions",
  }
};
