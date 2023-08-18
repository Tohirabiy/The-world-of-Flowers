import { NavLink, Outlet } from "react-router-dom";
import "./style.scss";
import Headlock from "../asset/icons/headlock.svg";

const index = () => {
  return (
    <header className="w-full  ">
    <div className="container">
    <ul className="flex flex-col">
        <li className="top h-[51.8px] ">
          <ul className="flex justify-between pt-[15px]">
            <li className="flex items-center gap-[7px]">
              <img src={Headlock} alt="" />
              <h4 className="font-[Inter] text-[14px] font-medium hover:text-[#3ac777] likki ">
                Tashkent
              </h4>
            </li>
            <div className="gap-5 flex items-center">
              <i className=" text-[24px] bx bx-search"></i>
              <i className=" text-[24px] bx bx-cart"></i>
            </div>
          </ul>
        </li>

        <li className="bottom flex items-center h-20 justify-center  ">
          <ul className="flex items-center gap-[67px] font-[Inter] leading-6 text-[16px] font-normal ">
            {/* <NavLink
              className="hover:text-[#3ac777] likki   focus:border-b-2 border-[#3ac777]"
              to="/"
            >
              Homepage
            </NavLink> */}

            <NavLink
              className="hover:text-[#3ac777] likki  focus:border-b-2 border-[#3ac777]  "
              to="/flowers"
            >   Flowers   </NavLink>

            <NavLink   className="hover:text-[#3ac777] likki  focus:border-b-2 border-[#3ac777] "  to="/plants" >   Plants
            </NavLink>
            <NavLink className="hover:text-[#3ac777] likki    "to="/gifts">Gifts</NavLink>
            <NavLink className="hover:text-[#3ac777] likki  " to="/discounts">
              Discounts
            </NavLink>
            <NavLink className="hover:text-[#3ac777] likki  " to="/aboutus">About us</NavLink>
          </ul>
        </li>
        <Outlet />
      </ul>
    </div>
    </header>
  );
};

export default index;
