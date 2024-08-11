// import React from "react";
// import Render from "../../Render/page";
// import Hat from "../../Models/HatModel";
// import Progess from "./Progess/page";
// import Image from "next/image";
// import Audio from "./../NavigationOtherPages/page";
// const Page = () => {
//   const data = [
//     {
//       id: 1,
//       name: "javascript",
//       values: 80,
//     },
//     {
//       id: 2,
//       name: "typescript",
//       values: 70,
//     },
//     {
//       id: 2,
//       name: "python",
//       values: 60,
//     },
//     {
//       id: 2,
//       name: "java",
//       values: 40,
//     },
//   ];

//   const skills = [
//     {
//       id: 1,
//       img: "dart",
//     },
//     {
//       id: 2,
//       img: "figma",
//     },
//     {
//       id: 3,
//       img: "Flutter",
//     },
//     {
//       id: 4,
//       img: "java-script",
//     },
//     ,
//     {
//       id: 5,
//       img: "java",
//     },
//     ,
//     {
//       id: 6,
//       img: "Next_js",
//     },
//     ,
//     {
//       id: 7,
//       img: "OOP",
//     },
//     ,
//     {
//       id: 8,
//       img: "prisma",
//     },
//     {
//       id: 9,
//       img: "python",
//     },
//     {
//       id: 10,
//       img: "react",
//     },
//     {
//       id: 11,
//       img: "SQL",
//     },
//     {
//       id: 12,
//       img: "Typescript",
//     },
//   ];

//   return (
//       <div className="bg-fixed about text-white">
//         <div className="h-screen flex flex-col  justify-between items-center overflow-hidden">
//           <Audio />

//           <div className=" w-[600px] h-[600px] flex justify-center item-center relative -top-7 z-10">
//             <Render>
//               <Hat />
//             </Render>
//           </div>
//           <div className=" absolute text-center bottom-44">
//             <h1 className=" text-yellow-300 wh text-9xl">HackBucks</h1>
//             <p className=" text-slate-300">
//               Meet the Wizard behind this portfolio
//             </p>
//           </div>
//         </div>
//         <div className="grid-container">
//           <div className="item1 rounded-lg pro backdrop-blur-3xl ">
//             <div className="p-4">
//               <h1 className=" text-3xl wh">Architect of Enchantment</h1>
//               <br />
//               <p>
//                 My journey in web development is powered by an array of mystical
//                 tools and languages, with JavaScript casting the core of my
//                 enchantments. I wield frameworks like React.js and Next.js with
//                 precision, crafting seamless portals (websites) that connect
//                 realms (users) across the digital universe. The ancient arts of
//                 the Jamstack empower me to create fast, secure, and dynamic
//                 experiences, while my design skills ensure every creation is not
//                 only functional but visually captivating. Join me as I continue
//                 to explore new spells and technologies to shape the future of
//                 the web.
//               </p>
//             </div>
//           </div>
//           <div className="item2 p-5 flex flex-col justify-center items-center rounded-lg pro backdrop-blur-3xl">
//             <h1 className=" capitalize p-5 wh">most used languages</h1>
//             {data.map((i) => (
//               <div
//                 key={i.id}
//                 className="  w-[200px] flex flex-col justify-center space-y-2"
//               >
//                 <h1 className=" wh text-xs">{i.name}</h1>
//                 <Progess values={i.values} />
//               </div>
//             ))}
//           </div>
//           <div className="item3 rounded-lg pro backdrop-blur-3xl p-8 text-white">
//             <div className="p-4">
//             <h2 className="text-2xl font-bold wh mb-4">
//               Next.js Web Application
//             </h2>
//             <p className=" mb-4">
//               Developed a dynamic and responsive web application using Next.js,
//               showcasing a strong command of server-side rendering and static
//               site generation. The application features seamless navigation and
//               improved performance with optimized loading times.
//             </p>
//             <p className="">
//               <span className="font-semibold">Technologies Used:</span> Next.js,
//               Tailwind CSS, React, Node.js
//             </p>
//             </div>
//           </div>
//           <div className="item4 rounded-lg pro backdrop-blur-3xl flex flex-col text-yellow-300 wh  justify-around">
//             <div className="p-5 text-5xl">
//               25+ <sub className=" text-white text-3xl">clients</sub>
//             </div>
//             <div className="p-5 text-4xl">
//               1+ <sub className=" text-white text-3xl">years of experience</sub>
//             </div>
//           </div>
//           <div className="item5 rounded-lg pro grid grid-cols-6 backdrop-blur-3xl">
//             {" "}
//             {skills.map((i) => (
//               <div
//                 key={i.id}
//                 className="p-14  rounded-3xl  flex items-center gap-5  duration-500 delay-75"
//               >
//                 <Image
//                   src={`/Skills/${i.img}.png`}
//                   className="imgg filter cursor-pointer scale-100 transition-all ease-in-out duration-500 hover:scale-150"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//   );
// };

// export default Page;

import React from "react";
import Render from "../../Render/page";
import Hat from "../../Models/HatModel";
import Progess from "./Progess/page";
import Image from "next/image";
import Audio from "./../NavigationOtherPages/page";

const Page = () => {
  const data = [
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
      id: 3,
      name: "python",
      values: 60,
    },
    {
      id: 4,
      name: "java",
      values: 40,
    },
  ];

  const skills = [
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
    {
      id: 5,
      img: "java",
    },
    {
      id: 6,
      img: "Next_js",
    },
    {
      id: 7,
      img: "OOP",
    },
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
    <div className="bg-fixed about text-white">
      <div className="min-h-screen flex flex-col justify-between items-center overflow-hidden relative top-5">
        <Audio />

        <div className="w-full h-[400px] sm:w-[600px] sm:h-[600px] flex justify-center items-center relative -top-7 z-10">
          <Render>
            <Hat />
          </Render>
        </div>

        <div className="absolute text-center bottom-20 sm:bottom-44">
          <h1 className="text-4xl sm:text-9xl text-yellow-300 wh">HackBucks</h1>
          <p className="text-sm sm:text-base text-slate-300">
            Meet the Wizard behind this portfolio
          </p>
        </div>
      </div>

      <div className="grid-container p-5 sm:p-10 gap-4 sm:gap-10">
        <div className="item1 rounded-lg pro backdrop-blur-3xl p-4">
          <h1 className="text-xl sm:text-3xl wh">Architect of Enchantment</h1>
          <p className="mt-4 text-sm sm:text-base">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </div>

        <div className="item2 flex flex-col justify-center items-center rounded-lg pro backdrop-blur-3xl p-4">
          <h1 className="capitalize text-lg sm:text-2xl p-2 sm:p-5 wh">
            Most Used Languages
          </h1>
          {data.map((i) => (
            <div
              key={i.id}
              className="w-full sm:w-[200px] flex flex-col justify-center space-y-2"
            >
              <h1 className="wh text-xs sm:text-sm">{i.name}</h1>
              <Progess values={i.values} />
            </div>
          ))}
        </div>

        <div className="item3 rounded-lg pro backdrop-blur-3xl p-4 text-white">
          <h2 className="text-xl sm:text-2xl font-bold wh mb-4">
            Next.js Web Application
          </h2>
          <p className="text-sm sm:text-base mb-4">
            Developed a dynamic and responsive web application using Next.js,
            showcasing a strong command of server-side rendering and static site
            generation. The application features seamless navigation and
            improved performance with optimized loading times.
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-semibold">Technologies Used:</span> Next.js,
            Tailwind CSS, React, Node.js
          </p>
        </div>

        <div className="item4 rounded-lg pro backdrop-blur-3xl flex flex-col text-yellow-300 wh sm:block hidden justify-around">
          <div className="p-5 text-5xl">
            25+ <sub className=" text-white text-3xl">clients</sub>
          </div>
          <div className="p-5 text-4xl">
            1+ <sub className=" text-white text-3xl">years of experience</sub>
          </div>
        </div>
        {/* <div className="item4 rounded-lg pro backdrop-blur-3xl flex flex-col items-center md:block hidden text-yellow-300 wh justify-around p-4">
          <div className="text-3xl sm:text-5xl">
            25+ <sub className="text-white text-xl sm:text-3xl">clients</sub>
          </div>
          <div className="text-2xl sm:text-4xl">
            1+{" "}
            <sub className="text-white text-xl sm:text-3xl">years of experience</sub>
          </div>
        </div> */}

        <div className="item5 rounded-lg pro grid grid-cols-3 sm:grid-cols-6 backdrop-blur-3xl p-4">
          {skills.map((i) => (
            <div
              key={i.id}
              className="p-4 sm:p-14 rounded-3xl flex items-center gap-2 sm:gap-5 duration-500 delay-75"
            >
              <Image
                src={`/Skills/${i.img}.png`}
                className="imgg filter cursor-pointer scale-100 transition-all ease-in-out duration-500 hover:scale-150"
                width={50}
                height={50}
                alt={i.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
