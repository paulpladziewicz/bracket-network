import React, { Fragment } from "react";
import Link from 'next/link'

function MobileMenu({ open, toggleOpen = (f) => f }) {
  if (open) {
    return (
      <ul
        id="menuMobile"
        className="absolute py-4 top-20 left-4 right-6 flex flex-col bg-white shadow-md rounded-md"
      >
        <Link
          onClick={() => toggleOpen(!open)}
          href="#about-me"
          className="mr-8 py-3 ml-6 font-bold hover:text-indigo-800"
        >
          About
        </Link>
        <Link
          onClick={() => toggleOpen(!open)}
          href="#skills"
          className="mr-8 py-3 ml-6 font-bold hover:text-indigo-800"
        >
          Skills
        </Link>
        <Link
          onClick={() => toggleOpen(!open)}
          href="#components"
          className="mr-8 py-3 ml-6 font-bold hover:text-indigo-800"
        >
          Components
        </Link>
        <Link
          onClick={() => toggleOpen(!open)}
          href="#portfolio"
          className="mr-8 py-3 ml-6 font-bold hover:text-indigo-800"
        >
          Portfolio
        </Link>
        <Link
          onClick={() => toggleOpen(!open)}
          href="#opinion"
          className="mr-8 py-3 ml-6 font-bold hover:text-indigo-800"
        >
          Opinion
        </Link>
        <Link
          onClick={() => toggleOpen(!open)}
          href="#contact"
          className="mr-8 py-3 ml-6 font-bold hover:text-indigo-800"
        >
          Contact
        </Link>
      </ul>
    );
  } else {
    return <></>;
  }
}

export default MobileMenu;
