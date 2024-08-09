'use client'
import { useEffect } from "react";
import Homee from "./Components/Home/page";
// import moduleName from 'next/aud'

export default function Home() {
  // useEffect(() => {
  const m = () => {

  const audio=  new Audio("/audio/birds39-forest-20772.mp3");
    audio.loop = true;
    audio.play();
  };
  // }, []);

  return (
    <>
    {/* <div>
      <button onClick={m}>C</button>
    </div> */}
      <Homee />
    </>
    // <>
    //   {/* <RenderModel>
    //     <Models />
    //     <Wizard />
    //   </RenderModel> */}
    //   <div className=" animate-spin-Slow flex justify-center items-center h-screen">
    //     {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ipsa! */}
    //     {/* <audio src="birds39-forest-20772.mp3" className=" bg-black" onClick={m} autoplay loop>play</audio> */}

    //     <button onClick={m}>play</button>
    //     <div className="relative w-64 h-64">
    //       <div className="rotating-border">
    //         <div>mnxzmn</div>
    //         <div>mnxzmn</div>
    //         <div>mnxzmn</div>
    //       </div>
    //       {/* <Image
    //     src="/path/to/your/image.jpg" // Replace with your image path
    //     alt="Rotating Border Image"
    //     layout="fill"
    //     objectFit="cover"
    //     className="relative z-0"
    //   /> */}
    //       lsn
    //     </div>
    //   </div>
    // </>
  );
}
