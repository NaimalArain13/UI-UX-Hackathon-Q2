import Navbar from '@/app/Component/header'
import Image from "next/image"
// import ProductDetail from '@/app/Component/productDetails/productDetails'
import TopSection from '@/app/Component/productListPage/productTop'
// import { ProductCardProps } from '@/lib/data'
interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  priceStrikeThrough?: number;
}
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { IoMdStar } from 'react-icons/io'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { PiShoppingCartSimpleThin } from 'react-icons/pi'
import { Button } from '@/components/ui/button'

async function ProductDetails({params}:{params:{id:string}}) {
  const parseId = parseInt(params.id)
  const response = await fetch("http://localhost:3000/api/product");
    const data:ProductCardProps[] = await response.json();
  
    const matchId = data.find((p)=>p.id=== parseId);
    console.log(matchId)
  return (
    <div>
      <TopSection />
      <Navbar />
        {/* <ProductDetail {parseId} /> */}
        <div className="flex flex-col md:flex-row py-4 jutify-center  items-center md:p-9">
          <div className="md:w-1/2 w-full flex flex-col gap-3 justify-center items-center md:justify-start">
            <div>
              <Image
                src={matchId?.image  || ""}
                alt={matchId?.title || ""}
                width={300}
                height={200}
                className='max-w-3xl w-full'
              />
            </div>
            <div className="flex gap-3 justify-start">
              <Image
                src={matchId?.image || ""}
                alt={matchId?.title || ""}
                width={100}
                height={75}
              />
              <Image
                src={matchId?.image || ""}
                alt={matchId?.title || ""}
                width={100}
                height={75}
                className=''
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full text-[#858585] space-y-5 flex flex-col justify-center items-start md:justify-start px-9">
            <h1 className='text-3xl font-bold text-black'>{matchId?.title}</h1>
            <p className="flex text-yellow-500 gap-2 items-center">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <span className="text-Text2">10 Reviews</span>
            </p>
            <p>${matchId?.price}</p>
            <p>
              Availability : <span className="text-Button">In Stock </span>
            </p>
            <p className="border-b border-gray-500 pb-4">
              {matchId?.description}
            </p>
            <div className="flex gap-4 py-4">
              <p className="w-[30px] h-[30px] rounded-full bg-Button"></p>
              <p className="w-[30px] h-[30px] rounded-full bg-[#23856D]"></p>
              <p className="w-[30px] h-[30px] rounded-full bg-[#E77C40]"></p>
              <p className="w-[30px] h-[30px] rounded-full bg-[#252B42]"></p>
            </div>

            <div className="flex gap-5 py-4 items-center">
              <Button className="bg-Button py-6 hover:bg-none">Select Options</Button>
              <div className="flex gap-4">

                <CiHeart size={28} className="bg-white"/>
                <PiShoppingCartSimpleThin size={28} className="bg-white" />

              <MdOutlineRemoveRedEye size={24}  className="bg-white"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductDetails