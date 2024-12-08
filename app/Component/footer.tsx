import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="">
      <div className="max-w-[1440px] w-full pt-3 px-4 space-y-8 md:px-11 ">
        <div className="mx-auto max-w-[1170px] w-full ">
            <div className="flex gap-3 justify-between items-center mb-5 py-6 border-b border-gray-300">
                <div className="font-bold text-2xl">
                Bandage
                </div>
                <div>
                <p className="flex flex-row space-x-6 text-Button ">
                <FaLinkedin size={28}/> <FaXTwitter size={28}/> <FaGithub size={28}/>
            </p>
                </div>
            </div>
          {/* first section: Links and Logo */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center md:text-left py-4">
          
            {/* Links Column 1 */}
            <div>
              <h3 className="text-Text2 text-md font-bold mb-4 ">Company Info</h3>
              <div className="flex text-Text text-md font-medium flex-col space-y-3">
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
              </div>
            </div>

            {/* Links Column 2 */}
            <div>
              <h3 className="text-Text2 text-md font-bold mb-4">Legal</h3>
              <div className="flex text-Text text-md font-medium flex-col space-y-3">
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
              </div>
            </div>

            {/* Links Column 3 */}
            <div>
              <h3 className="text-Text2 text-md font-bold mb-4">
              Features
              </h3>
              <div className="flex text-Text text-md font-medium flex-col space-y-3">
              <p>Business Marketing</p>
                <p>User Analytic</p>
                <p>Live Chat</p>
                <p>Unlimited Support</p>
              </div>
            </div>
            {/* Links Column 4 */}
            <div>
              <h3 className="text-Text2 text-md font-bold mb-4">
              Resources
              </h3>
              <div className="flex text-Text2 text-md font-medium flex-col space-y-3">
              <p>IOS & Android</p>
                <p>Watch a Demo</p>
                <p>Customers</p>
                <p>API</p>
              </div>
            </div>
             {/* Logo */}
             <div className="flex justify-center  items-center flex-col  md:items-start md:justify-start">
              <p className="font-bold mb-3 text-Text2 ">Get In Touch</p>
              
             <div className="bg-Primary p-4 flex justify-between">
               
                    <Input type="text" placeholder="Email" className="text-left bg-transparent border-none outline-none" />
                
                <p className="bg-Button text-white items-center px-3 flex justify-end">Subscribe</p>
             </div>
             <p className="text-sm">Lore imp sum dolor Amit</p>
            </div>

          </div>
        </div>

      </div>
        {/* Bottom Section */}
        <div className="py-6 mx-auto px-20 bg-Primary  flex items-center justify-start">
          <div className="flex items-center text-Text1 gap-3 text-sm ">
            <FaRegCopyright />
            <p>Made With Love By Finland All Right Reserved </p>
          </div>
        </div>
    </footer>
  );
}
