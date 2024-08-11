"use client";
import React, { useState, useRef } from "react";
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
import { GiSoundOn } from "react-icons/gi";
import { GiSoundOff } from "react-icons/gi";

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
    link: "https://github.com/hamadhussain",
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
  const [hoveredItem, setHoveredItem] = useState(true);
  const audioRef = useRef(new Audio("/audio/birds39-forest-20772.mp3"));
  const hover = () => {
    if (hoveredItem == false) {
      audioRef.current.pause();
    } else {
      audioRef.current.loop = true;
      audioRef.current.play();
    }
    setHoveredItem(!hoveredItem);
  };

  return (
    // <div className=" flex flex-col justify-center items-center  home min-h-screen overflow-hidden">
    //   <div className="flex text-white w-screen justify-end px-28 absolute top-5 ">
    //     <div className="  homee p-3" onClick={hover}>
    //       {hoveredItem ? (
    //         <GiSoundOff className="text-3xl" />
    //       ) : (
    //         <GiSoundOn className="text-3xl" />
    //       )}
    //     </div>
    //   </div>
    //   <div className="containn  w-[600px] h-[600px] flex z-20 justify-center items-center ">
    //     <div className=" absolute w-[600px] h-[600px]  z-10  ">
    //       <Render>
    //       <Wizard />
    //     </Render> 
    //     </div>
    //     <div className="  flex justify-center items-center z-20">
    //       {data.map((i) => (
    //         <div
    //           key={i.id}
    //           className=" flex  justify-between  items-center relative -left-8 gap-8  "
    //         >
    //           <div className="orbit-item  pro " id={`item${i.id}`}>
    //             <Link href={i.link}>
    //               {" "}
    //               <i.Icon className=" text-3xl cursor-pointer" />
    //             </Link>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col justify-center items-center home min-h-screen overflow-hidden">
    <div className="flex text-white lg:w-screen justify-end px-6 md:px-28 absolute top-5">
      <div className="pro rounded-full h-fit p-3" onClick={hover}>
        {hoveredItem ? (
          <GiSoundOff className="text-3xl" />
        ) : (
          <GiSoundOn className="text-3xl" />
        )}
      </div>
    </div>
    <div className="containn w-[80vw] h-[80vh] flex z-20 justify-center items-center">
      <div className="absolute w-[80vw] h-[80vh] z-10">
        <Render>
          <Wizard />
        </Render>
      </div>
      <div className="flex justify-center items-center z-20">
        {data.map((i) => (
          <div
            key={i.id}
            className="flex justify-between items-center relative gap-4 md:gap-8"
          >
            <div className="orbit-item pro" id={`item${i.id}`}>
              <Link href={i.link}>
                <i.Icon className="text-2xl md:text-3xl cursor-pointer" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Page;
