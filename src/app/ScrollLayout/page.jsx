'use client'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page = ({children}) => {
    useEffect(() => {
        AOS.init({
          once: true
        });
        AOS.refresh();
      }, []);
  return (
    <>
      {children}
    </>
  )
}

export default Page
