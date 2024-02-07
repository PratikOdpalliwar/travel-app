"use client"

import { useState } from 'react';
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Desktop Menu */}
      <ul className={`hidden h-full gap-12 lg:flex ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold">
            <Link className="mx-3" href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden absolute top-0 left-0 w-full bg-white transition-all duration-300 ease-in-out opacity-0 ${isMobileMenuOpen ? 'opacity-100' : ''}`}>
        <ul className='shadow-2xl mb-5 pt-6'>
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="regular-16 text-gray-50 cursor-pointer py-2 transition-all hover:font-bold">
              <Link className="flex justify-center" href={link.href} onClick={closeMobileMenu}>{link.label}</Link>
            </li>
          ))}
          <li className="flex justify-center regular-16 text-gray-50 cursor-pointer py-2 transition-all hover:font-bold">
            <Button 
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
              onClick={closeMobileMenu}
            />
          </li>
        </ul>
      </div>

      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
          onClick={closeMobileMenu}
        />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="z-10 inline-block cursor-pointer lg:hidden"
        onClick={toggleMobileMenu}
      />
    </nav>
  );
}

export default Navbar;
