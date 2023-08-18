import React from 'react';
import { NavLink,  } from "react-router-dom";
import { Breadcrumb } from "antd";


const NotFound = () => {
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
  }]}
/>     <div className='flex  flex-col items-center mt-36 mb-[200px]'>
            
       <h1 className='font-[Roboto] text-[100px]' >404</h1>
       <h3 className='font-[Roboto] text-[90px]'>You are mistaken in yor way</h3>
       <button className='h-10 bg-slate-400 w-20 rounded'>      <NavLink
           className=""
           to="/"
         >
           Home
         </NavLink></button>

   </div></div>
            
    
    );
};

export default NotFound;


