import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-full h-auto animate-spin">
        <Image
          src="/img/header-logo.png" // place your logo file inside /public
          alt="Loading..."
          width={300}
          height={300}
          priority
        />
      </div>
    </div>
  );
}
