"use client";
import React from "react";
import Wizard from "../../Models/Wizard";
import Render from "../../Render/page";
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaBookBookmark } from "react-icons/fa6";

import Link from "next/link";

const data = [
  {
    id: 1,
    name: "Home",
    link: "/",
    Icon: IoHomeOutline,
  },
  {
    id: 2,
    name: "About",
    link: "/Components/About",
    Icon: IoPersonOutline,
  },
  {
    id: 3,
    name: "Projects",
    link: "/Components/Projects",
    Icon: FaPalette,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://linkedin.com/in/hammadhussaindeveloper ",
    Icon: FaLinkedinIn,
  },
  {
    id: 5,
    name: "Contact",
    link: "/Components/Contact",
    Icon: FaPhoneAlt,
  },
  {
    id: 6,
    name: "Github",
    link: "https://| github.com/hamadhussain",
    Icon: FiGithub,
  },
  {
    id: 7,
    name: "Twitter",
    link: "https://github.com",
    Icon: FaTwitter,
  },
  ,
  {
    id: 8,
    name: "Gmail",
    link: "https://mail.google.com/mail/u/0/?hl=en-GB#inbox",
    Icon: BiLogoGmail,
  },
  ,
  {
    id: 9,
    name: "Resume",
    link: "/HHCV.pdf",
    Icon: FaBookBookmark,
  },
];

const Page = () => {
  return (
    <div className=" flex flex-col justify-center items-center overflow-hidden home min-h-screen ">
      {/* <div className=" absolute z-30 w-72 h-96">
        <Render>
          <Wizard />
        </Render>
      </div> */}
      {data.map((i) => ( 
        <div key={i.id} className=" flex justify-between items-center  gap-8  ">
          <div className="orbit-item " id={`item${i.id}`}>
            <Link href={i.link} target="_blank">
              {" "}
              <i.Icon className=" text-4xl " />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
