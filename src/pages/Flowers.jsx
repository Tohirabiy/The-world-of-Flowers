import React from "react";
import FlowersCarousel from "../components/FlowersCarousel";
import NewCarousel from "../components/NewCarousel";
import { Breadcrumb } from "antd";
import { NavLink, Outlet } from "react-router-dom";
// import {NavLink} from "react-router-dom";
const Flowers = () => {
  return (
    <div>
       
      <FlowersCarousel />
      <NewCarousel />
    </div>
  );
};

export default Flowers;
