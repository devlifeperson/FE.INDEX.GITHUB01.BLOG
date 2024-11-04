import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
  RiTwitterXLine,
} from "@remixicon/react";

import { SocialLink } from "../base/social-link";

export const SiteFooter = () => {
  return (
    <footer className="my-8">
      <div className="container">
        <nav className="flex flex-row justify-center gap-2 p-2 text-gray-800">
          <SocialLink href="#" Icon={RiGithubLine} />
          <SocialLink href="#" Icon={RiLinkedinLine} />
          <SocialLink href="#" Icon={RiTwitterXLine} />
          <SocialLink href="#" Icon={RiMailLine} />
        </nav>
        <p className="text-center text-sm text-gray-500">
          © 2021 - 2024, Devlife Solution -{" "}
          <a href="/sitemap_index.xml">SiteMap</a>
        </p>
      </div>
    </footer>
  );
};
