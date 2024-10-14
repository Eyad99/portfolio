"use client";

import Image from "next/image";

import person from "@/assets/img/profile.png";
export default function Panner() {
  return (
    <div className="flex min-h-screen lg:flex-row flex-col" id="/">
      {/* Left side */}
      <div className="lg:w-[68%] w-[100%] bg-[#181C14] p-12 flex flex-col justify-between gap-[6rem]">
        <div className="lg:mt-28 mt-14">
          <h1 className="lg:text-6xl text-3xl font-bold mb-8">
            Frontend Developer.
          </h1>
          <p className="lg:text-4xl text-xl text-white mb-8">
            I like to craft solid and scalable frontend products with great user
            experiences.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Highly skilled at</h3>
            <p className="text-white sm:text-[16px] text-[12px]">
              progressive enhancement, design systems & UI Engineering.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Proven experience</h3>
            <p className="text-white sm:text-[16px] text-[12px]">
              building successful products for clients across several countries.
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="lg:w-[32%] w-[100%] bg-[#F5F5F5] p-12 relative">
        <div className="h-full flex items-center justify-center">
          <div className="w-80 h-80 bg-gray-300 rounded-full overflow-hidden">
            <Image
              src={person}
              alt="Frontend Developer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
