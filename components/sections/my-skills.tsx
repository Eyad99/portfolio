"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import tailwindCssIcon from "@/assets/img/my-skills/tailwindCss.svg";
import materialUiIcon from "@/assets/img/my-skills/material-ui.svg";
import storyBookIcon from "@/assets/img/my-skills/story-book.svg";
import reactIcon from "@/assets/img/my-skills/react.svg";
import reduxIcon from "@/assets/img/my-skills/redux.svg";
import cypressIcon from "@/assets/img/my-skills/cypress.svg";
import nextIcon from "@/assets/img/my-skills/next-js.svg";
import htmlIcon from "@/assets/img/my-skills/html.svg";
import jestIcon from "@/assets/img/my-skills/jest.svg";
import cssIcon from "@/assets/img/my-skills/css.svg";
import jsIcon from "@/assets/img/my-skills/js.svg";
import { useWindowWidth } from "@/hocs/useWindowWidth";

function MySkills() {
  const width = useWindowWidth();

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
    storyBook: { image: storyBookIcon, alt: "storyBookIcon", color: "#00d6df" },
    react: { image: reactIcon, alt: "reactIcon", color: "#00d6df" },
    redux: { image: reduxIcon, alt: "reduxIcon", color: "#8D69C6" },
    cpress: { image: cypressIcon, alt: "cypressIcon", color: "#000000" },
    next: { image: nextIcon, alt: "nextIcon", color: "#363636" },
    html: { image: htmlIcon, alt: "htmlIcon", color: "#E86F50" },
    jest: { image: jestIcon, alt: "jestIcon", color: "#A25369" },
    css: { image: cssIcon, alt: "cssIcon", color: "#4EB5E1" },
    js: { image: jsIcon, alt: "jsIcon", color: "#FDD24F" },
  };

  const images: { [key: string]: { image: any; alt: string; color: string } } =
    {
      "1-2": ImagesObj.html,
      "1-3": ImagesObj.css,
      "1-4": ImagesObj.js,
      "1-5": ImagesObj.react,
      "1-6": ImagesObj.next,
      // "1-7": ImagesObj.react,
      "1-8": ImagesObj.redux,
      "2-1": ImagesObj.storyBook,
      "2-2": ImagesObj.jest,
      "2-3": ImagesObj.cpress,
      "2-4": ImagesObj.tailwindCss,
      "2-5": ImagesObj.materialUi,
    };

 
  return (
    <section
      className={`relative min-h-screen flex flex-col `}
      aria-hidden={true}
      id="skills"
    >
      <div className="w-full flex justify-center absolute top-20 ">
        <p className="z-10 font-bold text-center w-[60%] text-3xl">
          Empowering projects with advanced skills in modern frameworks and
          tools
        </p>
      </div>
      <section
        className="mt-28 relative overflow-hidden "
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
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              className={GridClassName}
              style={{
                transform: `translate3d(${
                  index % 2 == 0 ? "-24px" : "24px"
                }, 0, 0)`,
              }}
            >
              {Array.from({ length: Math.floor(width / 96) }).map((_, ind) => (
                <div
                  key={ind}
                  className={
                    CardClassName +
                    `${
                      (index == 1 || index == 2 || index == 3) &&
                      Object.keys(images).map(
                        (key) => key === `${index + "-" + ind}`
                      ) &&
                      ind > 1 &&
                      ind < 10
                        ? Object.keys(images)?.map((key: string) => {
                            console.log("keykeykeykey", key);
                            return key === `${index + "-" + ind}`
                              ? ` hover:shadow-blur hover:shadow-[${images[key].color}] flex flex-col `
                              : ` hover:shadow-blur hover:shadow-green-500 flex flex-col `;
                          })
                        : "  transform scale-100 hover:scale-90 translate-z-0 transition-transform duration-1000 hover:duration-200 ease hover:ease-in-out "
                    } `
                  }
                >
                  {/* {(index == 1 || index == 2 || index == 3) &&
                  ind > 1 &&
                  ind < 10
                    ? Object.keys(images)?.map(
                        (key: string) =>
                          key === `${index + "-" + ind}` && (
                            <Image
                              width={50}
                              height={50}
                              src={images[key].image}
                              alt={images[key].alt}
                              style={{
                                userSelect: "none",
                                // filter: "drop-shadow(0 0 0.75rem #00d6df)",
                                filter: `drop-shadow(0 0 .8rem color-mix(in srgb, ${images[key].color} 40%, transparent))`,
                              }}
                            />
                          )
                      )
                    : ""} */}
                  {/* <span>{index + "-" + ind}</span> */}
 
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default MySkills;
