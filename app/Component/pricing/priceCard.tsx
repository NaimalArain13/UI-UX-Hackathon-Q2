import React from 'react';
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaToggleOn } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import PriceComponent from './priceComponent';
import { BiDollar } from 'react-icons/bi';
import { FAQsCard } from './FAQs';
import { FaFacebookSquare } from "react-icons/fa";

import { FaXTwitter } from 'react-icons/fa6';

function PriceCard() {
  return (
    <>
    <div className="bg-Primary min-h-screen flex flex-col justify-center items-center py-7">
      <div className="flex flex-col w-full justify-center items-center">
        {/* Heading Section */}
        <div className="mb-8 px-4 flex flex-col justify-center items-center w-full space-y-9 text-center max-w-[463px]">
          <h1 className="font-bold text-Text2 text-3xl">Pricing</h1>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <div className="flex gap-6 px-3 items-center">
            <p className="flex gap-3 text-xl font-[600px] items-center">
              Monthly <span> <FaToggleOn size={39} /></span>
            </p>
            <p className="flex gap-3 text-xl font-[600px] items-center">
              Yearly
              <Button className="bg-[#B2E3FF] text-Button py-2 px-4 rounded-full text-lg">
                Save 25%
              </Button>
            </p>
          </div>
        </div>

        {/* Pricing Cards Section */}
        <div className="flex py-6 justify-center items-center ">
          <PriceComponent
            plan={"Free"}
            description={`Organize across all apps by hand`}
            price={0}
          />
          <div className="bg-[#252B42] rounded-lg border relative bottom-5  border-Button flex justify-center items-center h-[500px] w-[327px] p-9">
            <div className="space-y-5 text-Primary">
              <h1 className="font-semibold text-xl">Standard</h1>
              <p className="text-lg font-medium">
                Organize across all apps by hand
              </p>
              <div className="flex gap-3 justify-center items-center">
                <p className="text-3xl font-bold text-Button">9.99</p>
                <p className="text-3xl font-bold text-Button flex flex-col gap-2">
                  <span>
                    <BiDollar size={24} />
                  </span>{" "}
                  Per Month
                </p>
              </div>
              <div className="flex gap-2 text-sm font-bold">
                <p className="w-[25px] h-[25px] rounded-full flex items-center justify-center text-white bg-[#2DC071]">
                  ✔
                </p>{" "}
                Unlimited product updates
              </div>
              <div className="flex gap-2 text-sm font-bold">
                <p className="w-[25px] h-[25px] rounded-full flex items-center justify-center text-white bg-[#2DC071]">
                  ✔
                </p>{" "}
                Unlimited product updates
              </div>
              <div className="flex gap-2 text-sm font-bold">
                <p className="w-[25px] h-[25px] rounded-full flex items-center justify-center text-white bg-[#2DC071]">
                  ✔
                </p>{" "}
                Unlimited product updates
              </div>
              <div className="flex gap-2 text-sm font-bold">
                <p className="w-[25px] h-[25px] rounded-full flex items-center justify-center text-white bg-[#BDBDBD]">
                  ✔
                </p>{" "}
                Unlimited product updates
              </div>
              <div className="flex gap-2 text-sm font-bold">
                <p className="w-[25px] h-[25px] rounded-full flex items-center justify-center text-white bg-[#BDBDBD]">
                  ✔
                </p>{" "}
                Unlimited product updates
              </div>

              <Button className="bg-Button hover:bg-none w-full text-lg">
                Try for free
              </Button>
            </div>
          </div>
          <PriceComponent
            plan={"Premium"}
            description={`Organize across all apps by hand`}
            price={19.99}
          />
        </div>

      </div>
    </div>
        {/* Logos Section */}
        <div className='bg-Primary'>
            <p className='text-center text-Text2 font-bold text-md'>Trusted By Over 4000 Big Companies</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 px-9 justify-items-center items-center py-4"> 
            
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
        
        {/* FAQs Section */}

        <div className='bg-white flex flex-col text-[#737373]  items-center justify-center mx-auto p-7 space-y-7'>
            <h1 className='font-bold text-[40px] text-Text2'>Pricing FAQs</h1>
            <p className='text-center text-xl mb-3'>Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics</p>
            <div className='grid grid-cols md:grid-cols-2 gap-5 md:px-11'>
            <FAQsCard />
            <FAQsCard />
            <FAQsCard />
            <FAQsCard />
            <FAQsCard />
            <FAQsCard />
            </div>
            <p className='text-Text2 pt-3'>Haven’t got your answer? Contact our support</p>
        </div>

        {/* Free Trial Section */}
        <div className='bg-white flex flex-col text-[#737373]  items-center justify-center mx-auto py-11 space-y-7'>
            <h1 className='font-bold text-[40px] text-Text2'>Start your 14 days free trial</h1>
            <p className='text-center '>Met minim Mollie non desert Alamo est sit cliquey dolor <br />
            do met sent. RELIT official consequent.</p>
            <Button className='py-7 px-11 hover:bg-none bg-Button'>Try it free now</Button>
            <div>
                <p className="flex flex-row space-x-6 ">
                <FaLinkedin className="text-[#0A66C2]" size={28}/> <FaFacebookSquare className="text-[#395185]" size={28}/> <FaXTwitter  className="text-Button" size={28}/> <FaInstagram size={28}/>
            </p>
                </div>
        </div>
    </>
  );
}

export default PriceCard;
