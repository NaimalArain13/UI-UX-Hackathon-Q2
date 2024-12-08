// import { Button } from "@/components/ui/button";
// import React from "react";
// import Image from "next/image";
// import { Redo } from 'lucide-react';
// import { IoLocationSharp } from "react-icons/io5";

// import { FaLinkedin, FaFacebookSquare, FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import ContactCard from "./contactCard";
// import { BsTelephone } from "react-icons/bs";
// import { MdOutlineMail } from "react-icons/md";

// function ContactSection() {
//   return (
//     <div>
//       <div>
//         <div className="flex flex-col justify-center items-center">
//             {/* section one */}
//           <div className=" bg-white flex flex-col md:flex-row justify-center items-center p-14 text-Text-2">
//             <div className="md:w-1/2 w-full flex flex-col justify-center items-start gap-7 px-9 text-center">
//               <p className="">CONTACT US</p>
//               <h1 className="font-bold text-[40px]">Get in touch today!</h1>
//               <p className="text-left text-md">
//                 We know how large objects will act, but things on a small scale
//               </p>
//               <div className="flex gap-5 items-center">
//                 <p className="text-sm font-medium">Phone: +88061112222</p>
//                 <p className="text-sm font-medium">Fax : +451 215 215</p>
//               </div>
//               <div>
//                 <p className="flex flex-row space-x-6 ">
//                   <FaLinkedin className="text-[#0A66C2]" size={28} />{" "}
//                   <FaFacebookSquare className="text-[#395185]" size={28} />{" "}
//                   <FaXTwitter className="text-Button" size={28} />{" "}
//                   <FaInstagram size={28} />
//                 </p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 ">
//               <Image
//                 src={"/images/contact.svg"}
//                 alt="green image"
//                 width={443}
//                 height={300}
//               />
//             </div>
//           </div>
//           {/* section two */}
//           <div className="flex items-center space-y-4 flex-col justify-center">
//             <p className="font-semibold text-cm">VISIT OUR OFFICE</p>
//             <h1 className="font-bold text-[40px]">
//               We help small businesses with big ideas
//             </h1>

//             <div className="flex flex-col md:flex-row py-3">
//               <ContactCard icon={<BsTelephone />} />
//               <div className="h-[343px] bg-[#252B42] text-white p-6 flex flex-col space-y-3 justify-center items-center ">
//                 <h1 className="text-Button text-[60px]">
//                   <IoLocationSharp />
//                 </h1>
//                 <p className="font-semibold text-sm">
//                   georgia.young@example.com
//                 </p>
//                 <p className="font-semibold text-sm">georgia.young@ple.com</p>
//                 <p className="font-semibold text-md">Get Support</p>
//                 <Button
//                   variant={"outline"}
//                   className="rounded-full border-Button py-5 text-black "
//                 >
//                   Submit Request
//                 </Button>
//               </div>
//               <ContactCard icon={<MdOutlineMail />} />
//             </div>
//           </div>
//           {/* section three */}
//           <div className="flex flex-col items-center justify-center space-y-4 ">
//             <h1 className="text-center text-Button"><Redo size={50} /></h1>
//             <p className="font-semibold text-sm ">WE Can't WAIT TO MEET YOU</p>
//             <h1 className="font-bold text-[40px]">Let’s Talk</h1>
//             <Button className='bg-Button hover:bg-none py-7 px-5 text-lg'>Try for free</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactSection;


import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { Redo } from "lucide-react";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactCard from "./contactCard";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

function ContactSection() {
  return (
    <div className="flex flex-col gap-12 px-4 md:px-8 lg:px-16">
      {/* Section One */}
      <div className="bg-white flex flex-col md:flex-row justify-center items-center p-6 md:p-14 text-Text-2 gap-8 md:gap-0">
        <div className="md:w-1/2 w-full flex flex-col justify-center md:items-start gap-6 px-4 md:px-9 text-center md:text-left">
          <p className="text-sm font-medium text-gray-500">CONTACT US</p>
          <h1 className="font-bold text-[28px] md:text-[40px]">
            Get in touch today!
          </h1>
          <p className="text-md text-gray-700">
            We know how large objects will act, but things on a small scale
          </p>
          <div className="flex flex-col md:flex-row md:gap-5 gap-2 items-center">
            <p className="text-sm font-medium">Phone: +88061112222</p>
            <p className="text-sm font-medium">Fax : +451 215 215</p>
          </div>
          <div>
            <div className="flex flex-row justify-center md:justify-start gap-6">
              <FaLinkedin className="text-[#0A66C2]" size={28} />
              <FaFacebookSquare className="text-[#395185]" size={28} />
              <FaXTwitter className="text-Button" size={28} />
              <FaInstagram size={28} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={"/images/contact.svg"}
            alt="green image"
            width={300}
            height={200}
            className="w-auto h-auto md:w-[443px] md:h-[300px]"
          />
        </div>
      </div>

      {/* Section Two */}
      <div className="flex flex-col items-center justify-center space-y-3 md:space-y-6">
        <p className="font-semibold text-sm text-gray-500">VISIT OUR OFFICE</p>
        <h1 className="font-bold text-[28px] md:text-[40px] text-center">
          We help small businesses with big ideas
        </h1>
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <ContactCard icon={<BsTelephone />} />
          <div className="h-auto md:h-[343px] bg-[#252B42] text-white p-6 flex flex-col space-y-3 justify-center items-center text-center">
            <h1 className="text-Button text-[60px]">
              <IoLocationSharp />
            </h1>
            <p className="font-semibold text-sm">georgia.young@example.com</p>
            <p className="font-semibold text-sm">georgia.young@ple.com</p>
            <p className="font-semibold text-md">Get Support</p>
            <Button
              variant={"outline"}
              className="rounded-full border-Button py-3 px-6 text-black text-sm"
            >
              Submit Request
            </Button>
          </div>
          <ContactCard icon={<MdOutlineMail />} />
        </div>
      </div>

      {/* Section Three */}
      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="text-Button">
          <Redo size={50} />
        </h1>
        <p className="font-semibold text-sm text-gray-500 text-center">
          WE CAN&#39;T WAIT TO MEET YOU
        </p>
        <h1 className="font-bold text-[28px] md:text-[40px] text-center">
          Let&#39s Talk
        </h1>
        <Button className="bg-Button hover:bg-opacity-80 py-3 px-6 md:py-4 md:px-8 text-sm md:text-lg">
          Try for free
        </Button>
      </div>
    </div>
  );
}

export default ContactSection;
