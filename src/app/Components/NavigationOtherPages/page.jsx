import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import Audio from '../Audio/page'

const Page = () => {
  return (
    <div className="flex w-screen justify-between px-28">
      <div className=" relative top-10 flex justify-center items-center pro rounded-full h-fit p-3">
        <Link href="/">
          <IoHomeOutline className="  text-3xl" />
        </Link>
      </div>
      <div className=" relative top-10 flex justify-center items-center rounded-full h-fit pro p-3">
       <Audio/>
      </div>
    </div>
  );
};

export default Page;
