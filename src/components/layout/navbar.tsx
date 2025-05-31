"use client";
import { LOGO, NAV_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";
import { IconDownload } from "@tabler/icons-react";
import { useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Handle body overflow when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled ? "shadow-md bg-primary" : "bg-transparent",
        !isScrolled && isMenuOpen && "bg-[#002240]"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={LOGO}
                alt="Logo"
                width={150}
                height={150}
                priority
                className={cn(
                  "transition-transform duration-300 ease-in-out hover:opacity-80 transform",
                  isScrolled ? "scale-110" : "scale-130"
                )}
              />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Download Buttons - Desktop */}
            <a
              href="/company-profile-english-version.pdf"
              download="Crescent-Technology-Profile-EN.pdf"
              className="flex items-center text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200 whitespace-nowrap"
            >
              <IconDownload className="w-4 h-4 mr-1 flex-shrink-0" />
              <span className="hidden md:inline">English Profile</span>
              <span className="md:hidden">EN PDF</span>
            </a>
            <a
              href="/company-profile-arabic-version.pdf"
              download="Crescent-Technology-Profile-AR.pdf"
              className="flex items-center text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200 whitespace-nowrap"
            >
              <IconDownload className="w-4 h-4 mr-1 transform scale-x-[-1] flex-shrink-0" />
              <span className="hidden md:inline">الملف التعريفي</span>
              <span className="md:hidden">عربي PDF</span>
            </a>

            {/* Burger Icon */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none relative w-8 h-8 cursor-pointer text-white"
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "absolute inset-0 transition-all duration-300 ease-in-out",
                  isMenuOpen ? "opacity-0 rotate-45" : "opacity-100 rotate-0"
                )}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>
              <span
                className={cn(
                  "absolute inset-0 transition-all duration-300 ease-in-out",
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"
                )}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div
        className={cn(
          "fixed left-0 right-0 top-20 flex flex-col transform transition-transform duration-1000 ease-in-out z-40 min-h-[calc(100vh-5rem)]",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
          isScrolled ? "bg-primary" : "bg-[#002240]"
        )}
      >
        <div className="w-full">
          <div className="max-w-[1440px] mx-auto flex flex-col gap-6 md:gap-8 px-4 sm:px-6 xl:px-8">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-white text-2xl md:text-4xl font-medium font-serif transition-all duration-500 ease-out block",
                  isMenuOpen ? "translate-x-0" : "translate-x-80"
                )}
                style={{
                  transitionDelay: isMenuOpen ? `${idx * 100}ms` : "0ms",
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
