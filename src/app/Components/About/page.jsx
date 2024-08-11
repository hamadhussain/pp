import React from "react";
import Render from "../../Render/page";
import Hat from "../../Models/HatModel";
import Progess from "./Progess/page";
import Image from "next/image";
import Audio from './../NavigationOtherPages/page'
const Page = () => {
  const Data = [
    {
      id: 1,
      name: "javascript",
      values: 80,
    },
    {
      id: 2,
      name: "typescript",
      values: 70,
    },
    {
      id: 2,
      name: "python",
      values: 60,
    },
    {
      id: 2,
      name: "java",
      values: 40,
    },
  ];

  const Skill = [
    {
      id: 1,
      img: "dart",
    },
    {
      id: 2,
      img: "figma",
    },
    {
      id: 3,
      img: "Flutter",
    },
    {
      id: 4,
      img: "java-script",
    },
    ,
    {
      id: 5,
      img: "java",
    },
    ,
    {
      id: 6,
      img: "Next_js",
    },
    ,
    {
      id: 7,
      img: "OOP",
    },
    ,
    {
      id: 8,
      img: "prisma",
    },
    {
      id: 9,
      img: "python",
    },
    {
      id: 10,
      img: "react",
    },
    {
      id: 11,
      img: "SQL",
    },
    {
      id: 12,
      img: "Typescript",
    },
  ];

  return (
    <>
      <div className="bg-fixed about text-white">
        <div className="h-screen flex flex-col  justify-center items-center">    <Audio/>

          <div className=" w-[600px] h-[600px] flex justify-center item-center relative z-10">
            <Render>
              <Hat />
            </Render>
          </div>
          <div className=" absolute text-center bottom-44">
            <h1 className=" text-yellow-300 text-9xl">HackBucks</h1>
            <p className=" text-slate-300">
              Meet the Wizard behind this portfolio
            </p>
          </div>
        </div>
        {/* <div className=" flex justify-center flex-wrap items-center">
          <div>
            <h1>Architect of Enchantment</h1>
            <p>
              My journey in web development is powered by an array of mystical
              tools and languages, with JavaScript casting the core of my
              enchantments. I wield frameworks like React.js and Next.js with
              precision, crafting seamless portals (websites) that connect
              realms (users) across the digital universe. The ancient arts of
              the Jamstack empower me to create fast, secure, and dynamic
              experiences, while my design skills ensure every creation is not
              only functional but visually captivating. Join me as I continue to
              explore new spells and technologies to shape the future of the
              web.
            </p>
          </div>
          <div className=" ">
            <div>
              25+ <sub>clients</sub>
            </div>
            <div>
              1+ <sub>years of experience</sub>
            </div>
          </div>
        </div> */}
        <div className="grid-container">
          <div className="item1 rounded-lg pro backdrop-blur-3xl ">
            <div className="p-4">
              <h1 className=" text-3xl">Architect of Enchantment</h1>
              <br />
              <p>
                My journey in web development is powered by an array of mystical
                tools and languages, with JavaScript casting the core of my
                enchantments. I wield frameworks like React.js and Next.js with
                precision, crafting seamless portals (websites) that connect
                realms (users) across the digital universe. The ancient arts of
                the Jamstack empower me to create fast, secure, and dynamic
                experiences, while my design skills ensure every creation is not
                only functional but visually captivating. Join me as I continue
                to explore new spells and technologies to shape the future of
                the web.
              </p>
            </div>
          </div>
          <div className="item2 p-5 flex flex-col justify-center items-center rounded-lg pro backdrop-blur-3xl">
            <h1 className=" capitalize p-5 wh">most used languages</h1>
            {/* <div className=" border-2 w-[200px] flex flex-col justify-center items-center"> */}
            {Data.map((i) => (
              <div
                key={i.id}
                className="  w-[200px] flex flex-col justify-center space-y-2"
              >
                <h1 className=" wh text-xs">{i.name}</h1>
                <Progess values={i.values} />
              </div>
            ))}
            {/* </div> */}
          </div>
          <div className="item3 rounded-lg pro backdrop-blur-3xl">Main</div>
          <div className="item4 rounded-lg pro backdrop-blur-3xl flex flex-col text-yellow-300 wh  justify-around">
            <div className="p-5 text-5xl">
              25+ <sub className=" text-3xl">clients</sub>
            </div>
            <div className="p-5 text-4xl">
              1+ <sub className=" text-3xl">years of experience</sub>
            </div>
          </div>
          <div className="item5 rounded-lg pro grid grid-cols-6 backdrop-blur-3xl">
            {" "}
            {Skill.map((i) => (
              <div
                key={i.id}
                className="p-14  rounded-3xl  flex items-center gap-5  duration-500 delay-75"
              >
                <Image
                  src={`/Skills/${i.img}.png`}
                  className="imgg filter cursor-pointer scale-100 transition-all ease-in-out duration-500 hover:scale-150"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
