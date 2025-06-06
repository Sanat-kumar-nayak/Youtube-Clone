import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex mt-3 gap-8">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
