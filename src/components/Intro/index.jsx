import React from "react";
import CarouselIntro from "./Carousel";
import Arrowicon from "../asset/icons/arrow-icon.svg"

const index = () => {
  return (
    <div>
      <CarouselIntro />
      <ul className="flex mt-[40px] items-center justify-between">
        <li className="li_bir h-[220px] w-[560px]">
          <ul className="py-[46px] px-[80px]">
            <h2 className="w-[239px] font-[Roboto] text-[28px] leading-7 mb-[10px]">Nice little gifts</h2>
            <p className="w-[239px] h-[22px] text-[18px] mb-[24px]">for loved ones</p>
            <a href="#" className="flex gap-[12px] text-[14px] birbalo items-center font-[Inter] "> View now <img  src={Arrowicon} className="hov"   alt="" /></a>
          </ul>
        </li>
        <li className="li_ikki h-[220px] w-[560px]">
          <ul className="py-[46px] px-[80px]">
            <h2 className="w-[239px] font-[Roboto] text-[28px] leading-7 mb-[10px]">Plants</h2>
            <p className="w-[239px] h-[22px] text-[18px] mb-[24px]">for home comfort</p>
            <a href="#" className="flex gap-[12px] text-[14px] birbalo items-center font-[Inter] " >View now<img  src={Arrowicon}  className="hov"  alt="" /></a>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default index;
