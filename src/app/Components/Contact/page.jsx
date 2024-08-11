// import React from "react";
// import NavigationOtherPages from "./../NavigationOtherPages/page";
// import Link from "next/link";

// const Page = () => {
//   return (
//     <>
//       <div className="h-screen contact text-white flex space-y-6 justify-start items-center flex-col">
//         <NavigationOtherPages />
//         <div className=" flex relative top-16  space-y-6 justify-center items-center flex-col">
//           <h1 className=" text-5xl wh  animate-pulse">Summon The Wizard</h1>
//           <p className=" text-center w-[900px] text-slate-300">
//             Step into the circle of enchantment and weave your words into the
//             fabric of the cosmos. Whether you seek to conjure collaborations,
//             unlock mysteries, or simply share tales of adventure, your messages
//             are treasured scrolls within this realm. Use the form below to send
//             your missives through the ethereal network, and await the whisper of
//             magic in response.{" "}
//           </p>
//           <form
//             action=""
//             className=" flex flex-col justify-center items-center space-y-6"
//           >
//             <input
//               type="text"
//               name=""
//               placeholder="name"
//               className="pro rounded-lg p-2 w-[400px] bg-transparent    focus:border-none   "
//               id=""
//               required='true'
//             />
//             <input
//               type="text"
//               name=""
//               placeholder="email"
//               className="pro rounded-lg p-2 w-[400px] bg-transparent    focus:border-none   "
//               id=""
//               required='true'
//             />
//             <input
//               type="text"
//               name=""
//               placeholder="message"
//               className="pro rounded-lg p-2 w-[400px] bg-transparent    focus:border-none   "
//               id=""
//               required='true'
//             />
//             <Link href="whatsapp:contact=03462351008@s.whatsapp.com&message='sdasda'">
//               <button className=" bg-black p-3 rounded-lg pro w-[200px] transition-all ease-in-out duration-500 hover:scale-105 hover:duration-300">
//                 Cast Your Message!
//               </button>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Page;

"use client";
import React, { useState } from "react";
import NavigationOtherPages from "./../NavigationOtherPages/page";
import Link from "next/link";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submit = () => {
    console.log(`name ${name},email ${email} and message ${message}`);
  };

  return (
    <>
      <div className="sm:h-screen min-h-full overflow-hidden contact text-white flex flex-col justify-start items-center space-y-6 px-4 sm:px-8 md:px-16 lg:px-24">
        <NavigationOtherPages />
        <div className="flex flex-col h-full items-center space-y-6 pt-16">
          <h1 className="text-2xl sm:text-3xl md:text-6xl wh animate-pulse">
            Summon The Wizard
          </h1>
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl w-full max-w-4xl text-slate-200">
            Step into the circle of enchantment and weave your words into the
            fabric of the cosmos. Whether you seek to conjure collaborations,
            unlock mysteries, or simply share tales of adventure, your messages
            are treasured scrolls within this realm. Use the form below to send
            your missives through the ethereal network, and await the whisper of
            magic in response.
          </p>
          <form
            onSubmit={submit}
            action=""
            className="flex flex-col items-center space-y-6 w-full max-w-lg"
          >
            <input
              type="text"
              placeholder="name"
              className="pro rounded-lg p-2 w-full bg-transparent border border-slate-400 focus:border-none"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              className="pro rounded-lg p-2 w-full bg-transparent border border-slate-400 focus:border-none"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="message"
              className="pro rounded-lg p-2 w-full bg-transparent border border-slate-400 focus:border-none"
              rows="4"
              required
              onChange={(e) => setMessage(e.target.value)}
            />
            <Link
              href={`whatsapp:contact=03462351008@s.whatsapp.com&message='I ${name} with email ${email} wanted to send you this message " ${message}"'`}
            >
              <button className="bg-black p-3 rounded-lg pro w-full max-w-xs transition-all ease-in-out duration-500 hover:scale-105 hover:duration-300">
                Cast Your Message!
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
