import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import Audio from '../Audio/page'

const Page = () => {
  return (
    <div className="flex relative top-6 justify-between items-center  w-screen px-10">
      <div className="  flex justify-s items-center pro rounded-full h-fit p-3">
        <Link href="/">
          <IoHomeOutline className="  text-3xl" />
        </Link>
      </div>
      <div className="  flex justify-s items-center rounded-full h-fit pro p-3">
       <Audio/>
      </div>
    </div>
  );
};

export default Page;
