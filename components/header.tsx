"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./container";
import ExtLink from "./ext-link";

const navItems = {
  "/": {
    name: "Home",
  },
  "/work-journal": {
    name: "Work Journal",
  },
  "/projects": {
    name: "Projects",
  },
};

const Header = () => {
  let pathname = usePathname() || "/";

  return (
    <header className="py-10">
      <Container>
        <nav className="flex">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link
                key={path}
                href={path}
                className={clsx("mr-4 transition-all hover:text-gray-950", {
                  "text-gray-400": !isActive,
                })}
              >
                <span className="relative py-1">
                  {name}
                  {path === pathname ? (
                    <motion.div
                      className="absolute inset-0 top-7 z-[-1] h-[2px] bg-gray-500"
                      layoutId="sidebar"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  ) : null}
                </span>
              </Link>
            );
          })}
          <ExtLink
            className="text-gray-400 transition-all hover:text-gray-950"
            href="https://read.cv/aman_wankar"
          >
            Resume
          </ExtLink>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
