import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiYoutubeFill
} from "@remixicon/react";

import { SocialLink } from "../base/social-link";
import { siteConfig } from "@/config/site";

export const SiteFooter = () => {
  return (
    <footer className="my-8">
      <div className="container">
        <nav className="flex flex-row justify-center gap-2 p-2 text-gray-800">
        <SocialLink href={siteConfig.socialLinks.facebook} Icon={RiFacebookBoxFill} />
          <SocialLink href={siteConfig.socialLinks.linkedin} Icon={RiLinkedinFill} />
          <SocialLink href={siteConfig.socialLinks.instagram} Icon={RiInstagramFill} />
          <SocialLink href={siteConfig.socialLinks.youtube} Icon={RiYoutubeFill} />
        </nav>
        <p className="text-center text-sm text-gray-500">
          © 2021 - 2024, Devlife Solution -{" "}
          <a href="/FE.INDEX.GITHUB01.BLOG/sitemap_index.xml">SiteMap</a>
        </p>
      </div>
    </footer>
  );
};
