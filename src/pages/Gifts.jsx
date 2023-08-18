import React from 'react';
import './style.scss'
import { Breadcrumb } from "antd";

import { NavLink, } from "react-router-dom";

const Gifts = () => {
    return (
      <div className=""> 
      <Breadcrumb  className="mb-[17px]" items={[
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
              to="/gifts"
            >
             Gifts
            </NavLink>
          ),
        },]}
    />
        <div className='flex  flex-col items-center mt-36 mb-[200px]'>
            
            <h1 className='font-[Roboto] text-[100px]' >OPPS</h1>
            <h3 className='font-[Roboto] text-[90px]'>Page Gifts is not ready</h3>
            <button className='h-10 bg-slate-400 w-20 rounded'>      <NavLink
                className=""
                to="/"
              >
                Home
              </NavLink></button>
        </div>
        </div>
    );
};

export default Gifts;