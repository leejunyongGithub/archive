"use client";

import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    console.log("AboutPage");
  }, []);

  return (
    <div className="absolute inset-0 flex items-center gap-4 p-16">
      <div className="w-1/2 h-[calc(100%-8rem)] bg-red-500">aaa</div>
      <div className="w-1/2 h-[calc(100%-8rem)] bg-blue-500">bbb</div>
    </div>
  );
}
