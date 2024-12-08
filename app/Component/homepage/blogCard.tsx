"use client"

import React from 'react';
import Image from "next/image"
import { FaAngleRight } from "react-icons/fa6";
import { FcAlarmClock } from "react-icons/fc";
import { GrGallery } from "react-icons/gr";
export interface BlogCardProps {
  id:number,
  image: string;
  title: string;
  description:string,
  date:string,
  comment:number
}
export default function BlogCard({
  image,
  title,
  description,
  date,
  comment,
}:BlogCardProps){
  return (
    <div className="w-full max-w-[348px] rounded-md shadow-md h-[606px]">
      {/* Product Image */}
      <div className="h-[300px] flex justify-center items-center">
        <Image
          src={image}
          alt={title}
          width={348}
          height={300}
          className="object-cover"
        />
      </div>
      
    
      {/* Product Details */}
      <div className="p-4 flex flex-col gap-5">
      <div className='flex gap-3'>
        <p className='text-Button'>Google</p>
        <p>Trendy</p>
        <p>New</p>
      </div>
        {/* Product Title */}
        <h3 className="text-base font-semibold text-gray-800 truncate">
          {title}
        </h3>

        {/* Product Description */}
        <p className="text-sm text-gray-600 truncate ">
          {description}
        </p>
        <div className='flex justify-between'>
            <p className='gap-2 flex  items-center'><span className='text-Button'><FcAlarmClock /></span> {date}</p>
            <p className='gap-2 flex items-center'><span className='text-[#23856D]'><GrGallery /></span> {comment} comments</p>
        </div>

        <p className='flex gap-2 items-center'>Learn More <span><FaAngleRight /></span></p>
          
       
      </div>
    </div>
  );
};


