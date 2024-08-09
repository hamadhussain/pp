import React from 'react'

const page = ({children}) => {
    const audio = new Audio("/audio/birds39-forest-20772.mp3");
    audio.loop = true;
    audio.play();
  return (
    <>
      {children}
    </>
  )
}

export default page
