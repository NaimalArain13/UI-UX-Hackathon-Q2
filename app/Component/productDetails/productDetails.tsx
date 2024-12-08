import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import React from "react";
import Image from "next/image";
import ProductDetailsCard from "./productCard";
import { FaAngleRight } from "react-icons/fa";
import { IoIosSearch, IoMdStar } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const homePage = [
  {
    id: 1,
    priceStrikeThrough: 350,
    image: "/images/detail1.svg",
    title: "Graphic Design",
    description: "English Department",
    price: 450,
  },
  {
    id: 2,
    priceStrikeThrough: 350,
    image: "/images/detail1.svg",
    title: "Graphic Design",
    description: "English Department",
    price: 450,
  },
  {
    id: 3,
    priceStrikeThrough: 350,
    image: "/images/detail1.svg",
    title: "Graphic Design",
    description: "English Department",
    price: 450,
  },
  {
    id: 4,
    priceStrikeThrough: 350,
    image: "/images/detail1.svg",
    title: "Graphic Design",
    description: "English Department",
    price: 450,
  },
  {
    id: 5,
    priceStrikeThrough: 350,
    image: "/images/detail1.svg",
    title: "Graphic Design",
    description: "English Department",
    price: 450,
  },
  {
    id: 6,
    priceStrikeThrough: 350,
    image: "/images/detail1.svg",
    title: "Graphic Design",
    description: "English Department",
    price: 450,
  },
  {
    id: 7,
    priceStrikeThrough: 350,
    image: "/images/detail1.svg",
    title: "Graphic Design",
    description: "English Department",
    price: 450,
  },
  {
    id: 8,
    priceStrikeThrough: 350,
    image: "/images/detail1.svg",
    title: "Graphic Design",
    description: "English Department",
    price: 450,
  },
];
function ProductDetail() {
  return (
    <div>
      {/* section one */}
      <div className="flex flex-col bg-Primary gap-6 py-2">

        <div className="p-7">
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
        <div className="flex flex-col md:flex-row py-4 jutify-center  items-center md:p-9">
          <div className="md:w-1/2 w-full flex flex-col gap-3 justify-center items-center md:justify-start">
            <div>
              <Image
                src={"/images/product-d-1.svg"}
                alt="detail"
                width={504}
                height={450}
              />
            </div>
            <div className="flex gap-3 justify-start">
              <Image
                src={"/images/product-d-1.svg"}
                alt="detail"
                width={100}
                height={75}
              />
              <Image
                src={"/images/product-d-1.svg"}
                alt="detail"
                width={100}
                height={75}
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full text-[#858585] space-y-5 flex flex-col justify-center items-start md:justify-start px-6">
            <h1>Floating Phone</h1>
            <p className="flex text-yellow-500 gap-2 items-center">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <span className="text-Text2">10 Reviews</span>
            </p>
            <p>$1,139.33</p>
            <p>
              Availability : <span className="text-Button">In Stock </span>
            </p>
            <p className="border-b border-gray-500 pb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
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
      {/* section two */}
      <div className="grid grid-cols-1 md:grid-cols-3 p-5">
        <div className="flex items-center justify-center">
          <Image
            src={"/images/detail1.svg"}
            alt="image 1"
            width={332}
            height={392}
          />
        </div>
        <div className="flex text-justify flex-col gap-6">
          <h1 className="font-bold  text-black text-2xl">
            the quick fox jumps over{" "}
          </h1>
          <p className="mb-2">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="mb-2">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="mb-2">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex text-justify flex-col gap-4">
            <h1>the quick fox jumps over </h1>
            <p className="flex gap-2 items-ceter">
              <span>
                <FaAngleRight size={28} />
              </span>
              the quick fox jumps over the lazy dog
            </p>
            <p className="flex gap-2 items-ceter">
              <span>
                <FaAngleRight size={28} />
              </span>
              the quick fox jumps over the lazy dog
            </p>
            <p className="flex gap-2 items-ceter">
              <span>
                <FaAngleRight size={28} />
              </span>
              the quick fox jumps over the lazy dog
            </p>
            <p className="flex gap-2 items-ceter">
              <span>
                <FaAngleRight size={28} />
              </span>
              the quick fox jumps over the lazy dog
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1>the quick fox jumps over </h1>
            <p className="flex gap-2 items-ceter">
              <span>
                <FaAngleRight size={28} />
              </span>
              the quick fox jumps over the lazy dog
            </p>
            <p className="flex gap-2 items-ceter">
              <span>
                <FaAngleRight size={28} />
              </span>
              the quick fox jumps over the lazy dog
            </p>
            <p className="flex gap-2 items-ceter">
              <span>
                <FaAngleRight size={28} />
              </span>
              the quick fox jumps over the lazy dog
            </p>
          </div>
        </div>
      </div>

      {/* section three */}
      <div className="flex flex-col justify-center items-center py-6 bg-Primary">
        <div className="mb-8 flex flex-col w-full text-center border-b border-gray-300 pb-3 max-w-[463px]">
          <h1 className="font-bold text-Text2 text-3xl">BESTSELLER PRODUCTS</h1>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5
          "
        >
          {homePage.map((product, index) => (
            <ProductDetailsCard key={index} {...product} />
          ))}
        </div>
      </div>
      {/* section four */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 bg-Primary px-9 justify-items-center items-center py-4">
        <div>
          <Image
            src={"/images/logo1.svg"}
            alt="logo 1"
            height={25}
            width={130}
          />
        </div>
        <div>
          <Image
            src={"/images/logo2.svg"}
            alt="logo 1"
            height={25}
            width={130}
          />
        </div>
        <div>
          <Image
            src={"/images/logo3.svg"}
            alt="logo 1"
            height={25}
            width={130}
          />
        </div>
        <div>
          <Image
            src={"/images/logo4.svg"}
            alt="logo 1"
            height={25}
            width={130}
          />
        </div>
        <div>
          <Image
            src={"/images/logo5.svg"}
            alt="logo 1"
            height={25}
            width={130}
          />
        </div>
        <div>
          <Image
            src={"/images/logo6.svg"}
            alt="logo 1"
            height={25}
            width={130}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
