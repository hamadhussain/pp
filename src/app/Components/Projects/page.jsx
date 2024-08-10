import React from "react";
import Data from "../../Utils/project_data";
import StuffRender from "./StuffRender/page";
import NavigationOtherPages from "./../NavigationOtherPages/page";
import Link from "next/link";

const Page = () => {
  return (
    <div className=" project drop-shadow-2 flex flex-col text-white overflow-hidden justify- items-center  h-screen">
      <NavigationOtherPages />
      <div className="relative top-28 right-0 w-screen flex justify-between items-start">
        <div className=" ">
          <StuffRender />
        </div>
        <div className=" space-y-8 relative right-96 ">
          {Data.map((i) => (
            <div key={i.id}>
              <Link href={i.link}>
                <div className="pro  flex justify-around items-end gap-2 w-[700px] p-4 cursor-pointer rounded-xl">
                  <p className=" text-base text-white">{i.Heading}</p>
                  <p className=" text-base text-gray-400">
                    {i.Desc}
                    <span className="text-gray-500 px-2">................</span>
                  </p>
                  <p className=" text-base text-white">{i.Date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
