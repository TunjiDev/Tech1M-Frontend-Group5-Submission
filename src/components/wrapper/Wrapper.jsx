import React from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

function Wrapper(props) {
  return (
    <>
      <TopBar />
      {props.children}
      <SideBar />
    </>
  );
}

export default Wrapper;
