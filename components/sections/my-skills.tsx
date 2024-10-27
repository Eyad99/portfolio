"use client";

import { useState, useMemo } from "react";
import { useWindowWidth } from "@/hocs/useWindowWidth";
import { cn } from "@/lib/utils";

import Image from "next/image";
import framerMotionIcon from "@/assets/img/my-skills/framer-motion.svg";
import tailwindCssIcon from "@/assets/img/my-skills/tailwindCss.svg";
import materialUiIcon from "@/assets/img/my-skills/material-ui.svg";
import reactQueryIcon from "@/assets/img/my-skills/react-query.svg";
import storyBookIcon from "@/assets/img/my-skills/story-book.svg";
import cypressIcon from "@/assets/img/my-skills/cypress.svg";
import zustandIcon from "@/assets/img/my-skills/zustand.svg";
import reactIcon from "@/assets/img/my-skills/react.svg";
import reduxIcon from "@/assets/img/my-skills/redux.svg";
import nextIcon from "@/assets/img/my-skills/next-js.svg";
import htmlIcon from "@/assets/img/my-skills/html.svg";
import jestIcon from "@/assets/img/my-skills/jest.svg";
import cssIcon from "@/assets/img/my-skills/css.svg";
import jsIcon from "@/assets/img/my-skills/js.svg";


  const GridClassName =
    "grid auto-cols-[96px] gap-6 justify-start mb-6 relative whitespace-nowrap grid-flow-col ";
  const CardClassName =
    "flex justify-center items-center w-[96px] h-[96px] cursor-pointer rounded-xl border border-[rgba(38,38,38,.7)] bg-[rgba(236,236,236,0.62)] p-6";

  const ImagesObj: {
    [key: string]: { image: any; alt: string; color: string };
  } = {
    tailwindCss: {
      image: tailwindCssIcon,
      alt: "tailwindCssIcon",
      color: "#18B9B9",
    },
    materialUi: {
      image: materialUiIcon,
      alt: "materialUiIcon",
      color: "#0081CB",
    },
    framerMotion: { image: framerMotionIcon, alt: "framerMotionIcon", color: "#000000" },
    storyBook: { image: storyBookIcon, alt: "storyBookIcon", color: "#FE528C" },
    reactQuery: { image: reactQueryIcon, alt: "jsIcon", color: "#FD6877" },
    react: { image: reactIcon, alt: "reactIcon", color: "#00d6df" },
    redux: { image: reduxIcon, alt: "reduxIcon", color: "#8D69C6" },
    zustand: { image: zustandIcon, alt: "zustandIcon", color: "#65605B" },
    cpress: { image: cypressIcon, alt: "cypressIcon", color: "#000000" },
    next: { image: nextIcon, alt: "nextIcon", color: "#363636" },
    html: { image: htmlIcon, alt: "htmlIcon", color: "#E86F50" },
    jest: { image: jestIcon, alt: "jestIcon", color: "#A25369" },
    css: { image: cssIcon, alt: "cssIcon", color: "#4EB5E1" },
    js: { image: jsIcon, alt: "jsIcon", color: "#FDD24F" },
  };

 

 
function MySkills() {
  const width = useWindowWidth();
    const images: { [key: string]: { image: any; alt: string; color: string } } =
    {
  
      [width > 1285 ? "2-3" :width<1285 && width>840 ? "2-2":width<840 && width>740?'2-1':'2-1']: ImagesObj.html,
      [width > 1285 ? "2-4" :width<1285 && width>840 ? "2-3":width<840 && width>740?'2-2':'2-2']: ImagesObj.css,
      [width > 1285 ? "2-5" :width<1285 && width>840 ? "2-4":width<840 && width>740?'2-3':'2-3']: ImagesObj.js,
      [width > 1285 ? "2-6" :width<1285 && width>840 ? "2-5":width<840 && width>740?'2-4':width<740 && width>620?'2-4':width<620 && width>500?'2-4':width<500?'3-1':'3-1']: ImagesObj.react,
      [width > 1285 ? "2-7" :width<1285 && width>840 ? "2-6":width<840 && width>740?'2-5':width<740 && width>620?'2-5':width<620 && width>500?'3-1':width<500?'3-2':'3-2']: ImagesObj.next,
      [width > 1285 ? "2-8" :width<1285 && width>960 ? "2-7":width<960 && width>840?'3-2':width<840 && width>740?'2-6':width<740 && width>620?'3-1':width<620 && width>500?'3-2':width<500?'3-3':'3-3']: ImagesObj.reactQuery,
      [width > 1285 ? "2-9" :width<1285 && width>1200 ? "2-8":width<1200 && width>960?'3-2':width<960 && width>840?'3-3':width<840 && width>740?'3-1':width<740 && width>620?'3-2':width<620 && width>500?'3-3':width<500 && width>450?'3-4':width<450?'4-1':'4-1']: ImagesObj.redux,


      [width > 1450 ? "2-10" :width<1450 && width>1285 ? "3-3":width<1285 && width>1200 ? "2-9":width<1200 && width>960?'3-3':width<960 && width>840?'3-4':width<840 && width>740?'3-2':width<740 && width>620?'3-3':width<620 && width>500?'3-4':width<500 && width>450?'4-1':width<450?'4-2':'4-2']: ImagesObj.zustand,
      [width > 1450 ? "3-3" :width<1450 && width>1285 ? "3-4":width<1285 && width>1200 ? "3-2":width<1200 && width>960?'3-4':width<960 && width>840?'3-5':width<840 && width>740?'3-3':width<740 && width>620?'3-4':width<620 && width>500?'4-1':width<500 && width>450?'4-2':width<450?'4-3':'4-3']: ImagesObj.storyBook,
      [width > 1450 ? "3-4" :width<1450 && width>1285 ? "3-5":width<1285 && width>1200 ? "3-3":width<1200 && width>960?'3-5':width<960 && width>840?'3-6':width<840 && width>740?'3-4':width<740 && width>620?'3-5':width<620 && width>500?'4-2':width<500 && width>450?'4-3':width<450?'5-1':'5-1']: ImagesObj.jest,
      [width > 1450 ? "3-5" :width<1450 && width>1285 ? "3-6":width<1285 && width>1200 ? "3-4":width<1200 && width>960?'3-6':width<960 && width>840?'4-2':width<840 && width>740?'3-5':width<740 && width>620?'4-1':width<620 && width>500?'4-3':width<500 && width>450?'5-1':width<450?'5-2':'5-2']: ImagesObj.cpress,
      [width > 1450 ? "3-6" :width<1450 && width>1285 ? "3-7":width<1285 && width>1200 ? "3-5":width<1200 && width>960?'3-7':width<960 && width>840?'4-3':width<840 && width>740?'3-6':width<740 && width>620?'4-2':width<620 && width>500?'4-4':width<500 && width>450?'5-2':width<450?'5-3':'5-3']: ImagesObj.tailwindCss,
      [width > 1450 ? "3-7" :width<1450 && width>1285 ? "3-8":width<1285 && width>1200 ? "3-6":width<1200 && width>1080?'3-8':width<1080 && width>960?'4-2':width<960 && width>840?'4-4':width<840 && width>740?'4-1':width<740 && width>620?'4-3':width<620 && width>500?'5-1':width<500 && width>450?'5-3':width<450?'6-1':'6-1']: ImagesObj.materialUi,
      [width > 1450 ? "3-8" :width<1450 && width>1285 ? "3-9":width<1285 && width>1200 ? "3-7":width<1200 && width>1080?'4-2':width<1080 && width>960?'4-3':width<960 && width>840?'4-5':width<840 && width>740?'4-2':width<740 && width>620?'4-4':width<620 && width>500?'5-2':width<500 && width>450?'5-4':width<450?'6-2':'6-2']: ImagesObj.framerMotion,
 
    };
  const [isHovered, setIsHovered] = useState<string>('');

  const handleMouseEnter = (key: string) => setIsHovered(key);
  const handleMouseLeave = () => setIsHovered('');

  const gridItems = useMemo(() => {
     return Array.from({ length: width>620?5:width<620&&width> 450?7:9}).map((_, index) => (
      <div
        key={index}
        className={GridClassName}
        style={{
          transform: `translate3d(${index % 2 === 0 ? "-24px" : "24px"}, 0, 0)`,
        }}
      >
        {Array.from({ length: Math.floor(width / 96) }).map((_, ind) => {
          const key = `${index + 1}-${ind + 1}`;
          const imageData = images[key as keyof typeof images];
          return (
            <div
              key={ind}
              className={cn(
                CardClassName,
                {
                  "flex flex-col": imageData,
                  "transform scale-100 hover:scale-90 translate-z-0 transition-transform duration-1000 hover:duration-200 ease hover:ease-in-out": !imageData
                }
              )}
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
              style={{
                boxShadow: isHovered === key && imageData ? `0 0 30px ${imageData.color}` : undefined,
                transition: imageData?`box-shadow ${isHovered === key?'0.3s':'0.9s'} ease-in-out`:undefined
               }}
            >
              {imageData && (
                <Image
                  width={50}
                  height={50}
                  src={imageData.image}
                  alt={imageData.alt}
                  style={{
                    userSelect: "none",
                    filter: `drop-shadow(0 0 .8rem color-mix(in srgb, ${imageData.color} 40%, transparent))`,
                  }}
                />
              )}
             </div>
          );
        })}
      </div>
    ));
  }, [width, isHovered]);

  return (
    <section
      className="relative min-h-screen flex flex-col"
      aria-hidden={true}
      id="skills"
    >
      <div className="w-full flex justify-center absolute top-20">
        <p className="z-10 font-bold text-center w-[60%] text-3xl">
          Empowering projects with advanced skills in modern frameworks and
          tools
        </p>
      </div>
      <section
        className="mt-28 relative overflow-hidden"
        style={{
          maskImage: `linear-gradient(180deg, transparent 0%, #ffffff 200px, #ffffff calc(100vh - 300px), transparent 100%)`,
        }}
      >
        <div
          style={{
            maskImage:
              width > 840
                ? `linear-gradient(90deg, transparent 0%, #ffffff 300px, #ffffff calc(100vw - 300px), transparent 100%)`
                : "",
          }}
        >
          {gridItems}
        </div>
      </section>
    </section>
  );
}

export default MySkills;
