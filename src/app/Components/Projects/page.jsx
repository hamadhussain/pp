import React from "react";
import Data from "../../Utils/project_data";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import StuffRender from "./StuffRender/page";

const Page = () => {
  return (
    <div className=" project flex flex-col text-white overflow-hidden justify- items-center  h-full">
      <div className="flex w-screen justify-between px-28">
        <div className=" relative top-10 homee p-3">
          <Link href="/">
            <IoHomeOutline className="  text-3xl" />
          </Link>
        </div>
        <div className=" relative top-10 homee p-3">
          <Link href="/">
            <IoHomeOutline className="  text-3xl" />
          </Link>
        </div>
      </div>
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
