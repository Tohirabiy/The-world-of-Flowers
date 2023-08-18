import React ,{useState}from "react";
import Layoutforplants from "../components/Layoutforplants";
import data from "../plantdb";
import { NavLink } from "react-router-dom";

const Plants = () => {

  const [tohir,setTohir]=useState(false)
  return (
    <div>
      <Layoutforplants />


   <div className="grid grid-cols-4">

   {data.map((el) => {
        return (
          <div className="grid grid-cols-4 mb-[40px]">
                   <NavLink className="" to={`/${el.path}/${el.id}`}>
            <div className="card flex hover:shadow-2xl  flex-col items-center w-[260px] h-[366px] ">
             <img src={el.img} alt="img-card" />
             <h2 className="cursor-pointer hover:text-[#3ac777] likki mt-[20px] mb-[8.5px] text-[18px] lineheight font-[Inter]">
               {el.title}
             </h2>
             <p className=" cursor-pointer hover:text-[#3ac777] likki  flex gap-4 text-[14px] justify-between">
               {" "}
               {el.price}
               <strong className="dicdd cursor-pointer likki hover:text-[#3ac777] likki text-[#82828B] text-decoration-line: line-through">
                 {el.discount}
               </strong>
             </p>
           </div>
  
        </NavLink>
          </div>
        );
      })}
   </div>

   <div className="w-full  flex-col justify-center items-center flex mb-[100px]">
{
  tohir?   <div className="grid grid-cols-4">

  {data.map((el) => {
       return (
         <div className="grid  grid-cols-4 mb-[40px]">
            <NavLink className="" to={`/${el.path}/${el.id}`}>
            <div className="card flex hover:shadow-2xl  flex-col items-center w-[260px] h-[366px] ">
             <img src={el.img} alt="img-card" />
             <h2 className="cursor-pointer hover:text-[#3ac777] likki mt-[20px] mb-[8.5px] text-[18px] lineheight font-[Inter]">
               {el.title}
             </h2>
         
          
           <div className="flex gap-[16px] justify-center">
           <p className=" cursor-pointer hover:text-[#3ac777] likki  flex gap-4 text-[14px] justify-between">
               {" "}
               {el.price}
            
             </p>
             <p className="dicdd cursor-pointer likki hover:text-[#3ac777]  text-[#82828B] text-decoration-line: line-through">
                 {el.discount}
               </p>
           </div>
            
           
           </div>
  
        </NavLink>
       
         </div>
       );
     })}
  </div>
  :null
}
<button className="text-white bg-black w-[190.681px] text-[14px] leading-[17px] py-[14.5px] px-[16.16px]  text-center" onClick={()=>setTohir(!tohir)} >{tohir?"Close it":"See more"}</button>
</div>
  
  
    </div>
  );
};

export default Plants;

