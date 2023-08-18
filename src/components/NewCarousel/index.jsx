import React from "react";
import ArrowLeft from "../asset/icons/left.svg";
import Arrow from "../asset/icons/arrow-icon.svg";
import data from "../../db";
import "./style.scss";
import Whitearrow from "../asset/icons/whitearrow.svg";
import Korzinka from "../asset/icons/korzinka.svg";
import Search from "../asset/icons/seach.svg";
import { NavLink } from "react-router-dom";


const NewCarousel = () => {
  const { newFlowers } = data;
  const { relevant } = data;
  return (
    <div>
      <div className="flex justify-between ">
        <h2 className="mt-[49px] font-[Inter] text-[24px] leading-7 mb-11 hover:text-[#3ac777] gfg">
          New
        </h2>
        <div className="flex items-center justify-between gap-[19px]">
          <img src={ArrowLeft} className="hnff" alt="" />

          <img src={Arrow} className="bgbgff" alt="" />
        </div>
      </div>

      <div className="cards flex justify-between  w-full h-[366px]  ">
        {newFlowers?.map((item) => (
          
          <NavLink className="" to={`/${item.path}/${item.id}`}>
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

            <h4 className=" cursor-pointer hover:text-[#3ac777] mt-[20px] likki mb-[8.5px] text-[18px] lineheight font-[Inter]">
              {item.title}
            </h4>
           <div className="flex gap-4 mb-[46px]">
           <p className=" cursor-pointer hover:text-[#3ac777] likki flex  text-[14px] justify-between">
              {item.price}
              
            </p>
            <p className="dicdd cursor-pointer hover:text-[#3ac777] likki text-[#82828B] text-decoration-line: line-through">
                {item.discount}
              </p>
           </div>
          </div>
        </NavLink>
          
        ))}
      </div>

      <div className="flex justify-between ">
        <h2 className="mt-[49px] font-[Inter] text-[24px] leading-7 mb-11 hover:text-[#3ac777] gfg">
          Relevant
        </h2>
        <div className="flex items-center justify-between gap-[19px]">
          <img src={ArrowLeft} className="hnff" alt="" />

          <img src={Arrow} className="bgbgff" alt="" />
        </div>
      </div>

      <div className="cards flex justify-between  w-full h-[366px] mb-[100px] ">
        {relevant?.map((item, ) => (
          <NavLink className="" to={`/${item.path}/${item.id}`}>
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
  
              <h4 className=" cursor-pointer hover:text-[#3ac777] mt-[20px] likki mb-[8.5px] text-[18px] lineheight font-[Inter]">
                {item.title}
              </h4>
             <div className="flex gap-4 mb-[46px]">
             <p className=" cursor-pointer hover:text-[#3ac777] likki flex  text-[14px] justify-between">
                {item.price}
                
              </p>
              <p className="dicdd cursor-pointer hover:text-[#3ac777] likki text-[#82828B] text-decoration-line: line-through">
                  {item.discount}
                </p>
             </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NewCarousel;
