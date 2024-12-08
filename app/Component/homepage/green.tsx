import { Button } from '@/components/ui/button';
import React from 'react';
import Image from "next/image";

function GreenSection() {
  return (
    <div className='bg-[#23856D] pt-4'>
    <div className=' flex flex-col md:flex-row justify-center items-center gap-4 md:px-11 '>
    <div className='md:w-1/2 w-full flex flex-col justify-center text-white items-center sm:items-start gap-5 sm:px-7 md:px-9 px-3 sm:text-left text-center'>
        <p className=''>SUMMER 2020</p>
        <h1 className='font-semibold  text-[48px]'>Vita Classic Product</h1>
        <p className='sm:text-left text-center '>We know how large objects will act, We know how are objects will act, We know</p>
        <div className='flex gap-5 items-center'>
          <span>$16.48</span>
        <Button className='text-white bg-[#2DC071] p-5 rounded-none'>SHOP NOW</Button>
        </div>
        
      </div>
   <div className='w-1/2'>
   <Image 
      src={"/images/green.png"} alt='green image' width={443} height={300}/>
   </div>
   </div>
   </div>

 
  )
}

export default GreenSection;