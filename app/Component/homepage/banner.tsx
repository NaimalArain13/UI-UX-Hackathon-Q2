// import { Button } from '@/components/ui/button';
// import React from 'react';
// import Image from "next/image";

// function Banner() {
//   return (
//     <div className='h-screen bg-[url("/images/heroSection.svg")] bg-no-repeat text-white flex justify-center md:items-center'>
//       <div className='md:w-1/2 flex flex-col justify-center items-center md:items-start gap-5 text-center'>
//         <p className=''>SUMMER 2020</p>
//         <h1 className='font-semibold text-[48px]'>NEW COLLECTION</h1>
//         <p className='text-left'>We know how large objects will act,  <br />
//         but things on a small scale.</p>
//         <Button className='text-white bg-[#2DC071] p-5 rounded-none'>SHOP NOW</Button>
//       </div>
//     </div>
 
//   )
// }

// export default Banner
import { Button } from "@/components/ui/button";
import React from "react";

function Banner() {
  return (
    <div className="h-screen bg-[url('/images/heroSection.svg')] bg-no-repeat bg-cover bg-center flex justify-center">
      <div className="w-11/12 sm:w-3/4 md:w-1/2 flex flex-col justify-center items-center lg:items-start gap-3 md:gap-5 text-center">
        {/* Tagline */}
        <p className="text-sm md:text-base tracking-widest">SUMMER 2020</p>

        {/* Main Heading */}
        <h1 className="font-bold text-[50px] leading-tight">
          NEW COLLECTION
        </h1>

        {/* Description */}
        <p className="text-md md:text-lg leading-relaxed">
          We know how large objects will act, <br />
          but things on a small scale.
        </p>

        {/* Button */}
        <Button className="text-white bg-[#2DC071] py-3 px-6 text-sm md:text-base rounded-none mt-4">
          SHOP NOW
        </Button>
      </div>
    </div>
  );
}

export default Banner;
