import React from "react";
import { Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import data from "../db";

import { Collapse } from "antd";
import Plus from "../components/asset/icons/plusicon.svg";
import Minusicon from "../components/asset/icons/minusicon.svg";
import BirinchiIcon from "../components/asset/icons/Icon_birinchi.svg";
import IkkinchiIcon from "../components/asset/icons/Icon_ikkinchi.svg";
import UchinchiIcon from "../components/asset/icons/Icon_birinchi.svg";
import ArrowLeft from "../components/asset/icons/left.svg";
import Arrow from "../components/asset/icons/arrow-icon.svg";

const text = <p>This is outcome of the text</p>;
const items = [
  {
    key: "1",
    label: "Bouquet contents",
    children: text,
  },
  {
    key: "2",
    label: "Details",
    children: text,
  },
  {
    key: "3",
    label: "Delivery & Pay policy",
    children: text,
  },
];

const Cardpage = () => {
  const { newFlowers } = data;

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Breadcrumb   className="mb-[17px]" items={[
          {
            title: (
              <NavLink
                className="hover:text-[#3ac777] likki   focus:border-b-2 border-[#3ac777]"
                to="/"
              >
                Home
              </NavLink>
            ),
          },
          {
            title: (
              <NavLink
                className="hover:text-[#3ac777] likki  focus:border-b-2 border-[#3ac777]  "
                to=""
              >
                Rose Gold
              </NavLink>
            ),
          },
        ]}
      />

      <div className="birinchi mb-[160px] flex gap-[75px]">
        <div className="">
          <img
            className="w-[568px] h-[568px]"
            src="https://telegra.ph/file/b83978b881291a6b8765d.png"
            alt=""
          />
          <div className="birinchini_pasi gap-10 mt-5 flex">
            <div className="flex  items-center gap-[10px]">
              <img className="w-[46px] h-[46px]" src={BirinchiIcon} alt="" />
              <p className="text-[12px]">Benefits description</p>
            </div>
            <div className=" flex  items-center gap-[10px] ">
              <img className="w-[46px]   h-[46px]" src={IkkinchiIcon} alt="" />
              <p className="text-[12px]"> Always fresh flowers</p>
            </div>
            <div className=" flex items-center gap-[10px]">
              <img className="w-[46px] h-[46px]" src={UchinchiIcon} alt="" />
              <p className="text-[12px]"> Take photo of bouquet</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="border-b-[1px]">
            <h1 className="text-[24px] font-[Inter]  leading-7 mb-[20px] font-medium ">
              Red Tulips
            </h1>
            <div className="flex mb-[15px]  gap-5 ">
            
              <p className="text-[28px] leading-7  font-medium font-[Inter">46 $</p>
              <p className="p_text text-[18px] leading-[24px] text-[#82828B] text-decoration-line:  line-through pt-[3px]"> 60 $</p>
            </div>
            
          </div>
         
          <div className="mt-10">
            <h3 className="font-[Inter] text-[16px] font-normal mb-[24.5px] text-[#000]">Count:</h3>
            <div className="mb-[41.5px] flex gap-[10px]">
              <img className=""
                src={Plus}
                onClick={() => setCounter((counter) => counter + 1)}
                alt=""
              />
              <h2 className="w-[49px] flex justify-center ">{counter}</h2>

              <img className=""
                src={Minusicon}
                onClick={() => setCounter((counter) => counter - 1)}
                alt=""
              />
            </div>
          </div>
          <div className="Color">
            <p className="text-[16px] mb-[20px]">Color:</p>

            <div className="flex gap-[20px] mb-[54px]">
              <div className=" w-[36px]  bg-[#F0F0F5] rounded-full h-[36px] hover:border-2   hover:border-blue-700"></div>

              <div className=" w-[36px]  bg-[#EE7764] rounded-full h-[36px] hover:border-2  hover:border-blue-700"></div>

              <div className=" w-[36px]  bg-[#FFBC2C] rounded-full h-[36px] hover:border-2  hover:border-blue-700"></div>
            </div>

            <div className="flex w-[385px] gap-5 mb-[60px]">
                <button className="w-[309px] flex justify-center 
                rounded-md hover:bg-[#8C8EFF] bg-[#595CFF]">
                    <p className="w-[216px] text-[14px] px-[46.35px] py-[19.5px] text-white flex justify-center ">Add to the Cart</p>
               
                </button>
            <div className="flex items-center w-[56px]  hover:bg-[#00CB6F] border-[#E6E6EB] rounded-md">  <i className="p-[16px] text-[24px] bx bx-cart"></i></div>

           
            </div>
          </div>
          <div className="">
            <Collapse
            
              items={items}
              className="w-[521px] text-[14px] leading-5 font-[Inter] h-[58px] "
              bordered={false}
              defaultActiveKey={["false"]}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <h3 className="font-[Inter] text-[24px] leading-7 ">Similar flowers</h3>
        <div className="flex items-center justify-between mb-[44px] gap-[19px]">
          <img src={ArrowLeft} className="hnff" alt="" />

          <img src={Arrow} className="bgbgff" alt="" />
        </div>
      </div>

      <div className="cards flex justify-between  w-full h-[366px]  ">
        {newFlowers?.map((item) => (
          <div className="card hover:shadow-2xl flex flex-col items-center bg-[#fff] ">
            <div className="goog relative">
              <img className="" src={item.img} alt="" />
              <div className="white-arrow p-2 bg-blue-700 rounded-full   absolute top-[240px] right-[30px]  w-[40px] h-[40px]  ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.1867 6.28345C14.8087 6.66137 14.8087 7.27411 15.1867 7.65204L18.6959 11.1613H2.96774C2.43327 11.1613 2 11.5946 2 12.129C2 12.6635 2.43327 13.0968 2.96774 13.0968H18.6959L15.1867 16.606C14.8087 16.984 14.8087 17.5967 15.1867 17.9746C15.5646 18.3525 16.1773 18.3525 16.5553 17.9746L21.7162 12.8137M21.9266 11.7586C21.8793 11.6445 21.8093 11.5375 21.7166 11.4447L16.5553 6.28345C16.1773 5.90552 15.5646 5.90552 15.1867 6.28345M21.9266 11.7586C21.9735 11.8719 21.9996 11.996 22 12.1261C22 12.1271 22 12.1281 22 12.129C22 12.13 22 12.131 22 12.1319C21.9993 12.3777 21.9055 12.6233 21.7186 12.8113"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <h4 className=" cursor-pointer hover:text-[#3ac777] mt-[5px] likki mb-[8.5px] text-[18px] lineheight font-[Inter]">
              {item.title}
            </h4>
            <p className=" cursor-pointer hover:text-[#3ac777] likki flex gap-4 text-[14px] justify-between">
              {item.price}
              <strong className="dicdd cursor-pointer hover:text-[#3ac777] likki text-[#82828B] text-decoration-line: line-through">
                {item.discount}
              </strong>
            </p>
          </div>
        ))}
      </div>



    </div>
  );
};

export default Cardpage;

// https://telegra.ph/file/350e649852e6ccf4d3ea7.png
