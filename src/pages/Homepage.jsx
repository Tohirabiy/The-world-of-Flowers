import React from 'react';
import Layout from '../components/Layout';
import { Breadcrumb } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const Homepage = () => {
    return (
        <div>
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
                to="/flowers"
              >
                {" "}
               All Flowers{" "}
              </NavLink>
            ),
          },]}
      />
            <Layout/>
            
        </div>
    );
};

export default Homepage;