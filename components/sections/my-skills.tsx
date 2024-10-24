"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import tailwindCssIcon from "@/assets/img/my-skills/tailwindCss.svg";
import materialUiIcon from "@/assets/img/my-skills/material-ui.svg";
import storyBookIcon from "@/assets/img/my-skills/story-book.svg";
import reactIcon from "@/assets/img/my-skills/react.svg";
import reduxIcon from "@/assets/img/my-skills/redux.svg";
import cpressIcon from "@/assets/img/my-skills/cpress.svg";
import nextIcon from "@/assets/img/my-skills/next-js.svg";
import htmlIcon from "@/assets/img/my-skills/html.svg";
import jestIcon from "@/assets/img/my-skills/jest.svg";
import cssIcon from "@/assets/img/my-skills/css.svg";
import jsIcon from "@/assets/img/my-skills/js.svg";

function MySkills() {
  // const [cardCount, setCardCount] = useState(14);
  // const updateColumnCount = () => {
  //   const width = window.innerWidth;

  //   if (width < 640) {
  //     setCardCount(4);
  //   } else if (width < 768) {
  //     setCardCount(8);
  //   } else if (width < 1024) {
  //     setCardCount(14);
  //   } else {
  //     setCardCount(20);
  //   }
  // };

  // useEffect(() => {
  //   updateColumnCount();
  //   window.addEventListener("resize", updateColumnCount);

  //   return () => {
  //     window.removeEventListener("resize", updateColumnCount);
  //   };
  // }, []);

  const GridClassName =
    "grid auto-cols-[96px] gap-6 justify-start mb-6 relative whitespace-nowrap grid-flow-col ";
  const CardClassName =
    "flex justify-center items-center w-[96px] h-[96px] cursor-pointer rounded-xl border border-[rgba(38,38,38,.7)] bg-[rgba(236,236,236,0.62)] p-6";

  return (
    <section
      className={`relative min-h-screen flex flex-col `}
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
        className="mt-28 relative  overflow-hidden"
        style={{
          maskImage: `linear-gradient(180deg, transparent 0%, #ffffff 200px, #ffffff calc(100vh - 300px), transparent 100%)`,
        }}
      >
        <div
          style={{
            maskImage: `linear-gradient(90deg, transparent 0%, #ffffff 300px, #ffffff calc(100vw - 300px), transparent 100%)`,
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
              {Array.from({ length: 14 }).map((_, ind) => (
                <div
                  key={ind}
                  className={
                    CardClassName +
                    " transform scale-100 hover:scale-90 translate-z-0 transition-transform duration-1000 hover:duration-200 ease hover:ease-in-out"
                  }
                >
                  <Image width={50} height={50} src={nextIcon} alt="react" />
                  {/* {index} "- "{ind} */}
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
