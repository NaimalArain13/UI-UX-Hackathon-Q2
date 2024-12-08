import { Button } from '@/components/ui/button';
import React from 'react';
import Image from "next/image";

function SardiSection() {
  return (
  
    <div className='flex flex-col gap-3 mb-4 md:flex-row items-center sm:items-start justify-center mx-auto w-full px-6 sm:px-12 md:px-16'>
    <div className='md:w-1/2 w-full items-center sm:items-start justify-center'>
   <Image 
      src={"/images/sardi.png"} alt='green image' width={443} height={300} className='flex justify-center self-center'/>
   </div>
    <div className='md:w-1/2 py-7 w-full flex flex-col justify-center items-center sm:items-start gap-5'>
        <p className=''>SUMMER 2020</p>
        <h1 className='font-semibold text-[48px]'>Part of the Neural 
        Universe</h1>
        <p className='text-left'>We know how large objects will act, 
        but things on a small scale.</p>
        <div className='flex gap-4 flex-row justify-center items-center sm:items-start'>
        <Button className='text-white bg-[#2DC071] p-5 rounded-none'>BUY NOW</Button>
        <Button className='text-black bg-white p-5 rounded-none'>READ MORE</Button>
        </div>
        
      </div>
   
   </div>
   

 
  )
}

export default SardiSection;