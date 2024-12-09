import { Button } from '@/components/ui/button';
import React from 'react'
import { BiDollar } from "react-icons/bi";
interface PriceProp {
    plan:string,
    description:string,
    price:number,
}
function PriceComponent({plan,description,price}:PriceProp) {
  return (
    <div className='bg-white flex justify-center rounded-lg border py-5 border-Button items-center h-[500px] w-[327px] p-9'>
        <div className='space-y-5 text-Text2'>
            <h1 className='font-semibold text-xl'>{plan}</h1>
            <p className='text-lg font-medium'>{description}</p>
            <div className='flex gap-3 justify-center items-center'>
                <p className='text-3xl font-bold text-Button'>{price}</p> <p className='text-2xl font-bold  text-Button flex flex-col gap-2'><span><BiDollar size={24}/></span> Per Month</p>
            </div>
            <div className='flex gap-2 text-sm font-bold'>
                <p className='w-[25px] h-[25px] rounded-full flex items-center justify-center text-white bg-[#2DC071] '>✔</p> Unlimited product updates
            </div>
            <div className='flex gap-2 text-sm font-bold'>
                <p className='w-[25px] h-[25px] rounded-full flex items-center justify-center text-white bg-[#2DC071] '>✔</p> Unlimited product updates
            </div>
            <div className='flex gap-2 text-sm font-bold'>
                <p className='w-[25px] h-[25px] rounded-full flex items-center justify-center text-white bg-[#2DC071] '>✔</p> Unlimited product updates
            </div>
            <div className='flex gap-2 text-sm font-bold'>
                <p className='w-[25px] h-[25px] rounded-full flex items-center justify-center text-white bg-[#BDBDBD] '>✔</p> Unlimited product updates
            </div>
            <div className='flex gap-2 text-sm font-bold'>
                <p className='w-[25px] h-[25px] rounded-full flex items-center justify-center text-white bg-[#BDBDBD] '>✔</p> Unlimited product updates
            </div>

            <Button className='bg-Button hover:bg-none w-full text-lg'>Try for free</Button>
        </div>
    </div>
  )
}

export default PriceComponent