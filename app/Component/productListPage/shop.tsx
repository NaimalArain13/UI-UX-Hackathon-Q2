import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import JustForYou from "../card";
const homePage = [
    {
      id:1,
      priceStrikeThrough:350,
      image:"/images/product-cover-1.svg",
      title:"Graphic Design",
      description:"English Department",
      price:450
    },
    {
      id:2,
      priceStrikeThrough:350,
      image:"/images/product-cover-2.svg",
      title:"Graphic Design",
      description:"English Department",
      price:450
    },
    {
      id:3,
      priceStrikeThrough:350,
      image:"/images/product-cover-3.svg",
      title:"Graphic Design",
      description:"English Department",
      price:450
    },
    {
      id:4,
      priceStrikeThrough:350,
      image:"/images/product-cover-4.svg",
      title:"Graphic Design",
      description:"English Department",
      price:450
    },
    {
      id:5,
      priceStrikeThrough:350,
      image:"/images/product-cover-1.svg",
      title:"Graphic Design",
      description:"English Department",
      price:450
    },
    {
      id:6,
      priceStrikeThrough:350,
      image:"/images/product-cover-6.svg",
      title:"Graphic Design",
      description:"English Department",
      price:450
    },
    {
      id:7,
      priceStrikeThrough:350,
      image:"/images/product-cover-7.svg",
      title:"Graphic Design",
      description:"English Department",
      price:450
    },
    {
      id:8,
      priceStrikeThrough:350,
      image:"/images/product-cover-8.svg",
      title:"Graphic Design",
      description:"English Department",
      price:450
    },
    {
      id:9,
      priceStrikeThrough:350,
      image:"/images/product-cover-6.svg",
      title:"Graphic Design",
      description:"English Department",
      price:450
    },
    {
      id:10,
      priceStrikeThrough:350,
      image:"/images/product-cover-2.svg",
      title:"Graphic Design",
      description:"English Department",
      price:450
    },
    {
      id:11,
      priceStrikeThrough:350,
      image:"/images/product-cover-7.svg",
      title:"Graphic Design",
      description:"English Department",
      price:450
    },
    {
      id:12,
      priceStrikeThrough:350,
      image:"/images/product-cover-1.svg",
      title:"Graphic Design",
      description:"English Department",
      price:450
    },
    
  ]
function Shop() {
  return (
    <div className="bg-Primary space-y-4">
        {/* section one */}
      <div className="flex justify-between items-center  md:px-9">
        <div className="hidden md:flex">
          {" "}
          <h1 className="font-bold text-lg">SHOP</h1>
        </div>

        <div className="hidden md:flex md:p-7">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Shop</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
{/* section two */}
      <div className="flex justify-center items-center flex-col py-6">
        <div className="grid grid-cols md:grid-cols-5 gap-2">
          <div>
            {" "}
            <Image
              src={"/images/shop1.svg"}
              alt="shop 1"
              width={206}
              height={223}
            />
          </div>
          <div>
            <Image
              src={"/images/shop2.svg"}
              alt="shop 1"
              width={206}
              height={223}
            />
          </div>

          <div className="">
            <Image
              src={"/images/shop3.svg"}
              alt="shop 1"
              width={206}
              height={223}
            />
          </div>
          <div className="">
            <Image
              src={"/images/shop4.svg"}
              alt="shop 1"
              width={206}
              height={223}
            />
          </div>
          <div className="">
            <Image
              src={"/images/shop5.svg"}
              alt="shop 1"
              width={206}
              height={223}
            />
          </div>
        </div>
      </div>

{/* section three */}
      <div className="flex flex-col gap-5 md:flex-row justify-between sm:p-5 items-center bg-white md:px-9">
        <div>Showing all 12 results</div>
        <div className="flex gap-5 items-center">
          <p>View:</p>
          <Button variant={"outline"}>
            <Image
              src={"/images/vector1.svg"}
              alt="vector"
              width={16}
              height={16}
            />
          </Button>
          <Button variant={"outline"}>
            <Image
              src={"/images/vector2.svg"}
              alt="vector"
              width={16}
              height={16}
            />
          </Button>
        </div>
        <div className="flex gap-3">
          <Button variant={"outline"} className="py-3">
            Popularity{" "}
            <span>
              <IoIosArrowDown />
            </span>
          </Button>
          <Button variant={"outline"} className="bg-Button text-white px-4">Filter</Button>
        </div>
      </div>
       {/* section four */}
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 bg-Primary md:px-9 justify-items-center items-center md:p-3">
        <div >
            <Image src={"/images/logo1.svg"} alt="logo 1" height={25} width={130}/>
        </div>
        <div>
            <Image src={"/images/logo2.svg"} alt="logo 1" height={25} width={130}/>
        </div>
        <div>
            <Image src={"/images/logo3.svg"} alt="logo 1" height={25} width={130}/>
        </div>
        <div>
            <Image src={"/images/logo4.svg"} alt="logo 1" height={25} width={130}/>
        </div>
        <div>
            <Image src={"/images/logo5.svg"} alt="logo 1" height={25} width={130}/>
        </div>
        <div>
            <Image src={"/images/logo6.svg"} alt="logo 1" height={25} width={130}/>
        </div>
       </div>

       {/* Section five */}
       <div className="flex justify-center py-6 bg-white">
       <div
          className="grid grid-cols md:grid-cols-4 gap-5
          "
        >
          {homePage.map((product, index) => (
            <JustForYou key={index} {...product} />
          ))}
        </div>
        </div>
    </div>
  );
}

export default Shop;
