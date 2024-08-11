"use client";
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

const Page = ({ values }) => {
  const [progress, setProgress] = useState(13);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(values), 700);
    return () => clearTimeout(timer);
  }, [values]);
  return <Progress value={progress} className="w-[100%]  " />;
};

export default Page;
