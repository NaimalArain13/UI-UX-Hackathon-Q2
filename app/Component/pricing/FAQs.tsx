import React from "react";
import { FaAngleRight } from "react-icons/fa";

export function FAQsCard() {
  return (
    <div className="flex">
      <p>
        <FaAngleRight size={24} />
      </p>
      <div className="text-justify">
        <h1 className="font-bold text-md ">
          the quick fox jumps over the lazy dog
        </h1>
        <p className="text-[#737373]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
      </div>
    </div>
  );
}
