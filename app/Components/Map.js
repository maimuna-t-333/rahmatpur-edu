"use client";

import dynamic from "next/dynamic";


const LeafletMap = dynamic(() => import("./RealMap"), {
  ssr: false,
});

export default function Map() {
  return (
    <div className=" rounded">
      <h3 className="text-white bg-green-700 font-bold text-sm pl-26 py-3">ম্যাপ</h3>
      <div className="h-80 w-full">
        <LeafletMap />
      </div>
    </div>
  );
}


