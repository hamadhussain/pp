import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";

const Page = () => {
  return (
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
  );
};

export default Page;
