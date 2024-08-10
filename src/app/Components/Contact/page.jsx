import React from "react";
import NavigationOtherPages from "./../NavigationOtherPages/page";

const Page = () => {
  return (
    <>
      <div className="h-screen contact text-white flex space-y-6 justify-start items-center flex-col">
        <NavigationOtherPages />
        <div className=" flex relative top-16  space-y-6 justify-center items-center flex-col">
          <h1 className=" text-5xl wh  animate-pulse">Summon The Wizard</h1>
          <p className=" text-center w-[900px] text-slate-300">
            Step into the circle of enchantment and weave your words into the
            fabric of the cosmos. Whether you seek to conjure collaborations,
            unlock mysteries, or simply share tales of adventure, your messages
            are treasured scrolls within this realm. Use the form below to send
            your missives through the ethereal network, and await the whisper of
            magic in response.{" "}
          </p>
          <form
            action=""
            className=" flex flex-col justify-center items-center space-y-6"
          >
            <input
              type="text"
              name=""
              placeholder="name"
              className="pro rounded-lg p-2 w-[400px] bg-transparent    focus:border-none   "
              id=""
            />
            <input
              type="text"
              name=""
              placeholder="email"
              className="pro rounded-lg p-2 w-[400px] bg-transparent    focus:border-none   "
              id=""
            />
            <input
              type="text"
              name=""
              placeholder="message"
              className="pro rounded-lg p-2 w-[400px] bg-transparent    focus:border-none   "
              id=""
            />
            <button className=" bg-black p-3 rounded-lg pro w-[200px] transition-all ease-in-out duration-500 hover:scale-105 hover:duration-300">
              Cast Your Message!
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
