import React from "react";
import { Carousel } from "antd";
import "./style.scss";
import Arrowicon from "../asset/images/Icon.svg"

const index = () => {
    return (
       <div className="">
        <Carousel >
          <div className="carolbg w-[1240px] h-[482px] pt-[216px] px-[81px] ">
            
            {/* bg-[#595CFF] */}
            <h2 className="w-[323px] h-[28px] mb-[10px] leading-7 text-[#000] font-[Roboto] font-medium text-[28px]">Title</h2>
            <p className="w-[927px] mb-[24px] h-[22px] font-[Inter] font-medium leaddd text-[18px]">Description</p>
            <button className="py-[13px]  px-[17px] text-white  active:bg-[#595CFF] bg-[#000000] hover:bg-[#595CFF] rounded-lg flex items-center gap-[12px]">
              <div className="font-[Inter] text-white text-[14px] bttbt">
              Button
              </div>
             <img src={Arrowicon} className="hov " alt="" />
              
            </button>
          </div>
          <div className="carolbg w-full h-[482px] pt-[216px] px-[81px] ">
            
            {/* bg-[#595CFF] */}
            <h2 className="w-[323px] h-[28px] mb-[10px] leading-7 text-[#000] font-[Roboto] font-medium text-[28px]">Title</h2>
            <p className="w-[927px] mb-[24px] h-[22px] font-[Inter] font-medium leaddd text-[18px]">Description</p>
            <button className="py-[13px]  px-[17px] text-white  active:bg-[#595CFF] bg-[#000000] hover:bg-[#595CFF] rounded-lg flex items-center gap-[12px]">
              <div className="font-[Inter] text-white text-[14px] bttbt">
              Button
              </div>
             <img src={Arrowicon} className="hov " alt="" />
              
            </button>
          </div>
          <div className="carolbg w-full h-[482px] pt-[216px] px-[81px] ">
            
            {/* bg-[#595CFF] */}
            <h2 className="w-[323px] h-[28px] mb-[10px] leading-7 text-[#000] font-[Roboto] font-medium text-[28px]">Title</h2>
            <p className="w-[927px] mb-[24px] h-[22px] font-[Inter] font-medium leaddd text-[18px]">Description</p>
            <button className="py-[13px]  px-[17px] text-white  active:bg-[#595CFF] bg-[#000000] hover:bg-[#595CFF] rounded-lg flex items-center gap-[12px]">
              <div className="font-[Inter] text-white text-[14px] bttbt">
              Button
              </div>
             <img src={Arrowicon} className="hov " alt="" />
              
            </button>
          </div>
        </Carousel>
      </div>
       
     
    );
};

export default index;