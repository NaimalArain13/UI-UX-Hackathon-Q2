import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { GoArrowLeft } from "react-icons/go";

import { UserPen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar2() {
    
  return (
    <div className="w-full max-w-[1440px] p-4 px-14 mx-auto">
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center justify-center gap-11">
        {/* logo */}
        <div className="font-bold text-2xl">Bandage</div>
        {/* link */}
        <div className="flex gap-3 text-Text2 text-lg font-[650px]">
          <Link href={"/"}>Home</Link>
          <Link href={"/productListing"}>Product</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        </div>
        {/* icons */}
        <div className="flex gap-6 items-center text-Button">
        <p className="text-lg font-[medium]">Login</p>
         <Button className="bg-Button py-5">Become a member <span><GoArrowLeft /></span></Button>
        </div>
      </div>
    </div>
  );
}
