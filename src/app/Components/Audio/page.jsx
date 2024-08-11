// "use client";
// import React, { useState, useRef } from "react";
// import { GiSoundOn } from "react-icons/gi";
// import { GiSoundOff } from "react-icons/gi";

// const Page = () => {
//   const [hoveredItem, setHoveredItem] = useState(true);
//   const audioRef = useRef(new Audio("/audio/birds39-forest-20772.mp3"));

//   const hover = () => {
//     if (hoveredItem == false) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.loop = true;
//       audioRef.current.play();
//     }
//     setHoveredItem(!hoveredItem);
//   };
//   return (
//     <div className="   " onClick={hover}>
//       {hoveredItem ? (
//         <GiSoundOff className="text-3xl" />
//       ) : (
//         <GiSoundOn className="text-3xl" />
//       )}
//     </div>
//   );
// };

// export default Page;









"use client";
import React, { useState, useRef, useEffect } from "react";
import { GiSoundOn, GiSoundOff } from "react-icons/gi";

const Page = () => {
  const [hoveredItem, setHoveredItem] = useState(false); // Initialize as false
  const audioRef = useRef(null); // Initialize as null

  // Use effect to initialize Audio only on the client side
  useEffect(() => {
    audioRef.current = new Audio("/audio/birds39-forest-20772.mp3");
    return () => {
      // Cleanup audio on component unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ""; // Release the audio source
      }
    };
  }, []);

  const hover = () => {
    if (hoveredItem) {
      // Pause audio if hoveredItem is true
      audioRef.current.pause();
    } else {
      // Play audio if hoveredItem is false
      audioRef.current.loop = true;
      audioRef.current.play();
    }
    setHoveredItem(!hoveredItem);
  };

  return (
    <div className="cursor-pointer" onClick={hover}>
      {hoveredItem ? (
        <GiSoundOn className="text-3xl" />
      ) : (
        <GiSoundOff className="text-3xl" />
      )}
    </div>
  );
};

export default Page;
