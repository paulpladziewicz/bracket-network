import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import en from "../../locales/en";
import es from "../../locales/es";
import MobileMenu from "./MobileMenu";

function Navbar(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", removeMobile);
  });

  const removeMobile = () => {
    if (window.innerWidth >= 768) setOpen(false);
  };

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <nav className="flex justify-between items-center h-20 mx-4">
      <Link href="/" className="">
        Bracket Network
      </Link>

      <MobileMenu open={open} toggleOpen={(f) => setOpen(f)} />

      <ul className="hidden md:flex">
        <Link href="/about" className="mr-8">
          About
        </Link>
        <Link href="#contact" className="mr-8">
          Contact
        </Link>
      </ul>

      <select
        onChange={changeLanguage}
        defaultValue={locale}
        className="text-xl"
      >
        <option className="text-gray-900" value="en">
          EN
        </option>
        <option className="text-gray-900" value="es">
          ES
        </option>
      </select>
    </nav>
  );
}

export default Navbar;
