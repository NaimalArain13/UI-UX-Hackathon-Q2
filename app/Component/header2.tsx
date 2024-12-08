"use client"
import Link from "next/link";
import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="top-0 sticky z-10 bg-white w-full max-w-[1440px] p-4 px-6 md:px-14 mx-auto">
      <div className="flex justify-between items-center">
        {/* Left Section: Logo and Links */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
          <div className="font-bold text-2xl">Bandage</div>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-2xl cursor-pointer text-Button"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex  items-center gap-8 text-Text2 text-lg font-medium">
          <Link href={"/"}>Home</Link>
          <Link href={"/productListing"}>Product</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>

        {/* Right Section: Buttons */}
        <div className="hidden md:flex gap-6 items-center text-Button">
          <p className="text-lg font-medium cursor-pointer">Login</p>
          <Button className="bg-Button py-3 px-6 flex items-center gap-2">
            Become a member <span>
              <GoArrowLeft />
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 text-center space-y-4 text-lg font-medium text-Text2">
          <Link
            href={"/"}
            onClick={() => setIsMenuOpen(false)}
            className="block"
          >
            Home
          </Link>
          <Link
            href={"/productListing"}
            onClick={() => setIsMenuOpen(false)}
            className="block"
          >
            Product
          </Link>
          <Link
            href={"/pricing"}
            onClick={() => setIsMenuOpen(false)}
            className="block"
          >
            Pricing
          </Link>
          <Link
            href={"/contact"}
            onClick={() => setIsMenuOpen(false)}
            className="block"
          >
            Contact
          </Link>
          <div className="mt-6 flex flex-col gap-4">
            <p
              className="text-lg font-medium cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </p>
            <Button
              className="bg-Button py-3 px-6 flex justify-center items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Become a member <span>
                <GoArrowLeft />
              </span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
