import React from "react";
import { Carousel } from "antd";
import "./style.scss";
import Arrowicon from "../asset/images/Icon.svg"


const CarouselIntro = () => {
  return (
    <div className="carusflower">
      <Carousel >
        <div className="carouselbg w-full h-[220px] py-[43px] px-[81px] ">
          
          {/* bg-[#595CFF] */}
          <h2 className="w-[323px] h-[28px] mb-[10px] leading-7 text-[#000] font-[Roboto] text-[28px]">40% OFF</h2>
          <p className="w-[927px] mb-[24px] h-[22px] font-[Inter] font-medium leaddd text-[18px]">Best deals this week. Fresh flowers, plants and gifts</p>
          <button className="py-[13px]  px-[17px] text-white active:bg-[#595CFF] bg-[#000000] hover:bg-[#595CFF] rounded-lg flex items-center gap-[12px]">
            <div className="font-[Inter] text-[14px] bttbt">
            Shop now
            </div>
           <img src={Arrowicon} className="hov " alt="" />
            
          </button>
        </div>
        <div className="carouselbg w-full h-[220px] py-[43px] px-[81px] ">
          
          {/* bg-[#595CFF] */}
          <h2 className="w-[323px] h-[28px] mb-[10px] leading-7 text-[#000] font-[Roboto] text-[28px]">40% OFF</h2>
          <p className="w-[927px] mb-[24px] h-[22px] font-[Inter] font-medium leaddd text-[18px]">Best deals this week. Fresh flowers, plants and gifts</p>
          <button className="py-[13px] px-[17px] text-white  active:bg-[#595CFF] bg-[#000000] hover:bg-[#595CFF] rounded-lg flex items-center gap-[12px]">
            <div className="font-[Inter] text-[14px] bttbt">
            Shop now
            </div>
                      <img src={Arrowicon} className="hov " alt="" />

            
          </button>
        </div>    <div className="carouselbg w-full h-[220px] py-[43px] px-[81px] ">
          
          {/* bg-[#595CFF] */}
          <h2 className="w-[323px] h-[28px] mb-[10px] leading-7 text-[#000] font-[Roboto]  text-[28px]">40% OFF</h2>
          <p className="w-[927px] mb-[24px] h-[22px] font-[Inter] font-medium leaddd text-[18px]">Best deals this week. Fresh flowers, plants and gifts</p>
          <button className="py-[13px] px-[17px] text-white  active:bg-[#595CFF] bg-[#000000] hover:bg-[#595CFF] rounded-lg flex items-center gap-[12px]">
            <div className="font-[Inter] text-[14px] bttbt">
            Shop now
            </div>
                      <img src={Arrowicon} className="hov " alt="" />

            
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselIntro;
