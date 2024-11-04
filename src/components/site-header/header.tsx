import { RiMailLine, RiTwitterXLine } from "@remixicon/react";

import Image from "next/image";
import Link from "next/link";
import { SocialLink } from "../base/social-link";

import logo from "@/../public/logo.png";

export const SiteHeader = () => {
  return (
    <header className="h-14 fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container flex h-full items-center justify-between">
        <nav className="flex items-center gap-6">
          <Link href="/">
            <Image src={logo} alt="Logo" height={32} width={32} />
          </Link>
          <Link className="hover:text-indigo-600" href="/blog/1">
            Blog
          </Link>
          <Link
            className="hover:text-indigo-600"
            href="https://seovn360.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Index Tool
          </Link>
          <Link
            className="hover:text-indigo-600"
            href="https://app.google360s.com"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Seo Tools
          </Link>
        </nav>

        <nav className="ml-auto flex space-x-2">
          <SocialLink href="#" Icon={RiMailLine} />
          <SocialLink href="#" Icon={RiTwitterXLine} />
        </nav>
      </div>
    </header>
  );
};
