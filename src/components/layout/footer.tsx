"use client";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/constants";
import Link from "next/link";
import { useRef } from "react";

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative h-full py-20 mt-32 sm:mt-0 sm:pt-14 bg-[#f7f7f7] text-black"
      ref={container}
    >
      <div className="mx-auto w-full max-w-7xl px-4 flex flex-col gap-10">
        <div className="md:flex justify-between w-full">
          <div>
            <h1 className="md:text-4xl text-2xl font-semibold">
              Let&lsquo;s do great work together
            </h1>
            <div className="pt-2 pb-6 md:w-99">
              <p className="md:text-2xl text-xl py-4">Logo here</p>
            </div>
          </div>
          <div className="flex gap-10">
            <ul>
              <li className="text-2xl pb-2 text-black font-semibold">
                SITEMAP
              </li>
              {NAV_ITEMS.map((link, index) => (
                <li key={index} className="text-xl font-medium">
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <ul>
              <li className="text-2xl pb-2 text-black font-semibold">SOCIAL</li>
              {SOCIAL_LINKS.map((social, index) => (
                <li key={index} className="text-xl font-medium">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {social.name}
                  </a>
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
          <a href="#" className="font-semibold">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
