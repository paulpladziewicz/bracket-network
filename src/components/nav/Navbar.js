import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import HamburgerMenu from "react-hamburger-menu/dist/react-hamburger-menu.min.js";
// /Users/pladziewicz/Documents/websites/bracket-network/node_modules/react-hamburger-menu/dist/react-hamburger-menu.min.js

const en = {
  title: "Title",
  desc: "Yes, English.",
};
const es = {
  title: "Title",
  desc: "Yes, Español.",
};

function Navbar(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", removeMobile);
  });

  const removeMobile = () => {
    if (window.innerWidth >= 768) setOpen(false);
  };

  function toggle() {
    setOpen((open) => !open);
  }

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <nav className="flex justify-between items-center h-20 mx-4">
      <div className="flex items-center">
        <img className="w-10" src="/images/logo-rec.svg" alt="" />
        <Link href="/">
          <a className="block ml-2 text-2xl font-bold">Bracket Network</a>
        </Link>
      </div>

      <HamburgerMenu
        className="md:hidden"
        isOpen={open}
        menuClicked={toggle}
        width={30}
        height={20}
        strokeWidth={2}
        rotate={0}
        color="#f3f3f3"
        borderRadius={0}
        animationDuration={0.5}
      />

      <MobileMenu open={open} />

      <ul className="hidden md:flex md:items-center">
        <Link href="/about">
          <a className="block mr-8">About</a>
        </Link>
        <Link href="#contact">
          <a className="block mr-8">Contact</a>
        </Link>
        <select
          onChange={changeLanguage}
          defaultValue={locale}
          className="text-xl p-1 border-2 rounded-md"
        >
          <option className="text-gray-900" value="en">
            English
          </option>
          <option className="text-gray-900" value="es">
            Español
          </option>
        </select>
      </ul>
    </nav>
  );
}

export default Navbar;
