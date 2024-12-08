"use client"
import React, { useState } from "react";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { UserPen } from "lucide-react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full max-w-[1440px] p-4 mx-auto">
      <div className="flex justify-between items-center px-4">
        {/* Logo */}
        <div className="font-bold text-2xl">Bandage</div>

        {/* Desktop Links */}
        <div className="hidden sm:hidden md:flex gap-3 text-Text2 text-lg font-[650px]">
          <Link href={"/"}>Home</Link>
          <Link href={"/productListing"}>Shop</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"#"}>Blog</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"#"}>Pages</Link>
        </div>

        {/* Icons */}
        <div className="flex gap-6 items-center text-Button">
          <UserPen size={22} className="hidden md:block" />
          <p className="text-lg font-medium hidden md:block">
            Login / Register
          </p>
          <div className="flex gap-4">
            <IoIosSearch size={24} />
            <Link href={"/cart"}>
              <PiShoppingCartSimpleThin size={28} />
            </Link>
            <Link href={"/wishlist"}>
              <CiHeart size={28} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="block md:hidden text-black"
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose size={28} />
            ) : (
              <AiOutlineMenu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6 text-center">
          {/* Close Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-black z-50"
          >
            <AiOutlineClose size={28} />
          </button>

          <Link
            href={"/"}
            className="text-Text2 text-xl font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href={"/shop"}
            className="text-Text2 text-xl font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href={"/about"}
            className="text-Text2 text-xl font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href={"/blog"}
            className="text-Text2 text-xl font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href={"/contact"}
            className="text-Text2 text-xl font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href={"/pages"}
            className="text-Text2 text-xl font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pages
          </Link>
          <div className="flex flex-col items-center gap-4 mt-6">
            <UserPen size={22} />
            <p className="text-lg font-medium">Login / Register</p>
            <div className="flex gap-6">
              <IoIosSearch size={24} />
              <Link href={"/cart"}>
                <PiShoppingCartSimpleThin size={28} />
              </Link>
              <Link href={"/wishlist"}>
                <CiHeart size={28} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
