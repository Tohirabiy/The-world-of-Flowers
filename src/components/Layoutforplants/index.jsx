import React from "react";
import "./style.scss";
import NewCarousel from "../NewCarousel";
import { Breadcrumb ,Dropdown, Space} from "antd";
import { DownOutlined } from '@ant-design/icons';
import { NavLink, Outlet } from "react-router-dom";




const items = [
  {
    label: 'Sort by',
    key: '1',
  },
  {
    label: 'Color',
    key: '2',
  },
  {
    label: 'Price',
    key: '3',
  },
  {
    label: 'Flower type',
    key: '4',
  },
  {
    label: 'Occasion',
    key: '4',
  },
];


// Occasion




const index = () => {
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
                to="/plants"
              >
                {" "}
                Plants{" "}
              </NavLink>
            ),
          },]}
      />
<h2 className="mt-[20px] mb-[40px] text-[32px] leading-[38px]">All Plants</h2>

<ul className="flex items-center justify-between">
    <li className="flex items-center justify-between gap-[80px]"> 
      
      
      <Dropdown    menu={{ items,  }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      Sort by
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
   
  
   <Dropdown    menu={{ items,  }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
     color
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  <Dropdown    menu={{ items,  }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
     Price
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>

  <Dropdown    menu={{ items,  }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      Flower type
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>

  <Dropdown    menu={{ items,  }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      Occasion
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  
  </li>
    <li className="text-[16px] leading-6">24 items</li>
</ul>

<div className="w-full h-[2px] bg-[#E6E6EB] mt-[40px] mb-[40px]"></div>

      
      
    </div>
  );
};

export default index;

// Flower type 
// Occasion