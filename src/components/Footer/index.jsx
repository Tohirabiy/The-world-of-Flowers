import React from "react";
import { useState } from "react";
import "./style.scss";


const index = () => { 
  return (
    <footer>
      <div>
        <ul className="flex mt-10 mb-[59px]">
          <li className="mr-[231px]"> 
            <ul>
              <h4 className="font-[Inter] h-[24px] cursor-pointer hover:text-[#3ac777] likki text-[14px] font-normal leading-6 mb-[18px]">
                Title
              </h4>
              <p className="text-[12px]cursor-pointer hover:text-[#3ac777] likki font-medium dkfd leading-6 mb-[17px] ">
                +998991234567
              </p>
           


              <li className="flex gap-[20px]">
                <i class="bx  text-[24px] bxl-whatsapp"></i>
                <i className="bx  text-[24px] bxl-instagram"></i>
                <i class="bx text-[24px]  bxl-facebook"></i>
              </li>
            </ul>
          </li>
          {/* the rest */}

          <li className="flex gap-[171px]">
            <ul className="gap-[12px] items-start text-[16px] font-[Inter] font-normal leading-6 ">
              <li className="cursor-pointer hover:text-[#3ac777] likki">
                Help
              </li>
              <li className="cursor-pointer hover:text-[#3ac777] likki text-[14px] footermotor font-normal leading-6">
                Contact us
              </li>
              <li className="cursor-pointer hover:text-[#3ac777] likki text-[14px] footermotor font-normal leading-6">
                Delivery information
              </li>
              <li className="cursor-pointer hover:text-[#3ac777] likki text-[14px] footermotor font-normal leading-6">
                Payment information
              </li>
              <li className="cursor-pointer hover:text-[#3ac777] likki text-[14px] footermotor font-normal leading-6">
                Customer service
              </li>
              <li className="cursor-pointer hover:text-[#3ac777] likki text-[14px] footermotor font-normal leading-6">
                FAQ
              </li>
            </ul>
            <ul className="gap-[12px] items-start text-[16px] font-[Inter] font-normal leading-6 ">
              <li className="cursor-pointer hover:text-[#3ac777] likki">
                About us
              </li>
              <li className="cursor-pointer hover:text-[#3ac777] likki text-[14px] footermotor font-normal leading-6">
                Our Stores
              </li>
              <li className="cursor-pointer hover:text-[#3ac777] likki text-[14px] footermotor font-normal leading-6">
                Flower care
              </li>
              <li className="cursor-pointer hover:text-[#3ac777] likki text-[14px] footermotor font-normal leading-6">
                Site map
              </li>
            </ul>
            <ul className="gap-[12px] items-start text-[16px] font-[Inter] font-normal leading-6 ">
              <li className="cursor-pointer hover:text-[#3ac777] likki">Legal</li>
              <li className="cursor-pointer hover:text-[#3ac777] likki text-[14px] footermotor font-normal leading-6">
                Privacy policy
              </li>
              <li className="cursor-pointer hover:text-[#3ac777] likki text-[14px] footermotor font-normal leading-6">
                Terms & Conditions
              </li>
              <li className="cursor-pointer hover:text-[#3ac777] likki text-[14px] footermotor font-normal leading-6">
                Cookie policy
              </li>
              <li className="cursor-pointer hover:text-[#3ac777] likki text-[14px] footermotor font-normal leading-6">
                Item 4
              </li>
              <li className="cursor-pointer hover:text-[#3ac777] likki text-[14px] footermotor font-normal leading-6">
                Item 5
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default index;
