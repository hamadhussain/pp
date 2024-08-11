"use client"
import React, { useState,useEffect } from 'react'
import { Progress } from "@/components/ui/progress"

const page = ({values}) => {
  const [progress, setProgress] = useState(13)
  useEffect(() => {
    const timer = setTimeout(() => setProgress(values), 700)
    return () => clearTimeout(timer)
  }, [])
  return (
    <Progress value={progress} className="w-[100%]  " />
  )
}

export default page
