'use client'
import React from "react";
import Stuff from "../../../Models/Stuff";
import Render from "../../../Render/page";
const Page = () => {
  return (
    <div className=" w-full h-screen">
      <Render>
        <Stuff />
      </Render>
    </div>
  );
};

export default Page;
