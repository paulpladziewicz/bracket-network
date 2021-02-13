import React, { Fragment } from "react";
import Link from "next/link";

function MobileMenu({ open }) {
  if (open) {
    return (
      <ul
        id="menuMobile"
        className="z-10 absolute py-4 top-20 left-4 right-6 flex flex-col bg-white shadow-md rounded-md"
      >
        <Link href="/about">
          <a className="mr-8 py-3 ml-6 font-bold hover:text-indigo-800">
            About
          </a>
        </Link>
      </ul>
    );
  } else {
    return <></>;
  }
}

export default MobileMenu;
