"use client";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative h-full py-16 bg-primary text-white"
      ref={container}
    >
      <div className="mx-auto w-full max-w-7xl px-4 flex flex-col gap-10">
        <div className="flex md:flex-row flex-col justify-between gap-4 w-full">
          <div>
            <h1 className="md:text-4xl text-2xl font-semibold">
              Let&lsquo;s do great work together
            </h1>
            <div className="flex flex-col gap-4 pt-4">
              <Image src="/usa.svg" alt="logo" width={200} height={200} />
              <Image src="/KSA.svg" alt="logo" width={200} height={200} />
            </div>
          </div>
          <div className="flex gap-10">
            <ul className="flex flex-col gap-4">
              <li className="text-2xl text-cyan-blue font-semibold">
                SITEMAP
              </li>
              {NAV_ITEMS.map((link, index) => (
                <li key={index} className="text-xl font-medium">
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="text-2xl pb-2 text-cyan-blue font-semibold">
                SOCIAL
              </li>
              {SOCIAL_LINKS.map((social, index) => (
                <li key={index} className="text-xl font-medium">
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {social.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse gap-3 justify-between">
          <span className="font-medium">
            &copy; {new Date().getFullYear()} Crescent Technology. All Rights
            Reserved.
          </span>
          <Link href="/privacy" className="font-semibold">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
