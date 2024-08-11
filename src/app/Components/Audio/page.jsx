"use client";
import React, { useState, useRef } from "react";
import { GiSoundOn } from "react-icons/gi";
import { GiSoundOff } from "react-icons/gi";

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
    <div className="   " onClick={hover}>
      {hoveredItem ? (
        <GiSoundOff className="text-3xl" />
      ) : (
        <GiSoundOn className="text-3xl" />
      )}
    </div>
  );
};

export default Page;
