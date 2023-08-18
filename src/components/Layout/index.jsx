import "./style.scss";
import Intro from "../Intro"
import NewCarousel from "../NewCarousel"
import React from "react";

const index = () => {
    return (
        <section className="mt-[26px]">
          <Intro/>  

          <NewCarousel/>
        
        </section>
    );
};

export default index;
