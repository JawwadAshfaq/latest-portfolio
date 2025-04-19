"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Link style logic for active and inactive links
  const linkStyle = (href: string) =>
    `text-[18px] ${pathname === href ? "text-[#800080]" : "text-[#c4cfde]"} transition-all relative group cursor-pointer`;

  // Function to scroll to each section by ID
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close mobile menu after scroll
    }
  };

  return (
    <>
      <div className="max-w-[1300px] mx-auto mb-2 mt-2 px-4">
        <header className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="logo">
            <h1 className="text-[24px] md:text-[28px] font-bold text-white">
              {"<Jawwad Ashfaq />"}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-5 items-center">
            <li className="pt-2 font-[600]">
              <button
                onClick={() => scrollToSection("home")}
                className={linkStyle("/")}
              >
                HOME
                <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-[#800080] group-hover:w-full transition-all"></span>
              </button>
            </li>
            <li className="pt-2">
              <button
                onClick={() => scrollToSection("about")}
                className={linkStyle("/about")}
              >
                ABOUT
                <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-[#800080] group-hover:w-full transition-all"></span>
              </button>
            </li>
            <li className="pt-2">
              <button
                onClick={() => scrollToSection("services")}
                className={linkStyle("/services")}
              >
                SERVICES
                <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-[#800080] group-hover:w-full transition-all"></span>
              </button>
            </li>
            <li className="pt-2">
              <button
                onClick={() => scrollToSection("portfolio")}
                className={linkStyle("/portfolio")}
              >
                PORTFOLIO
                <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-[#800080] group-hover:w-full transition-all"></span>
              </button>
            </li>
            <button className="bg-head-btn px-4 py-2 text-white rounded font-semibold hover:bg-purple-800 transition">
              <a
                href="https://wa.me/923191542621"
                target="_blank"
                rel="noopener noreferrer"
              >
                LET'S TALK
              </a>
            </button>
          </ul>

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden p-3 text-[#800080]">
              <Menu size={30} />
            </SheetTrigger>
            <SheetContent className="bg-[#030014] text-white w-[90%]">
              <SheetHeader>
                <SheetTitle className=" text-[24px] font-bold">
                  <div className="logo mt-12">
                    <h1 className="text-[28px] md:text-[28px] font-bold text-white">
                      {"<Jawwad Ashfaq />"}
                    </h1>
                  </div>
                </SheetTitle>
                <SheetDescription>
                  Use the menu below to navigate:
                </SheetDescription>
              </SheetHeader>

              {/* Updated: Move the <ul> outside the <SheetDescription> */}
              <ul className="flex flex-col space-y-6 mt-6 p-5 text-[22px]">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className={linkStyle("/")}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className={linkStyle("/about")}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className={linkStyle("/services")}
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className={linkStyle("/portfolio")}
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={linkStyle("/contact")}
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <button className="bg-head-btn px-4 py-2 text-white rounded font-semibold hover:bg-purple-800 transition">
                    <a
                      href="https://wa.me/923191542621"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LET'S TALK
                    </a>
                  </button>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </header>
      </div>
      <hr className="h-[1px] border-[#800080]" />
    </>
  );
};

export default Header;
