"use client";
import React from "react";

const RouadMap = () => {
  // const [isClient, setIsClient] = useState(false);

  // const checkTargetMatch = useCallback((elementId: string) => {
  //   if (!isClient) return false;
  //   return document.getElementById(elementId)?.matches(":target") || false;
  // }, [isClient]);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  // const checkTargetMatch = useCallback((elementId: string) => {
  //   if (typeof document !== "undefined"){

  //     return document.getElementById(elementId)?.matches(":target") || false;
  //   }
  // }, [document]);

  return (
    <div className="h-[20%] absolute bottom-20 right-[4%] flex flex-col gap-5">
      <div
        className={`transition-all duration-300 ${
          // checkTargetMatch("panner")
          false
            ? "w-[2vh] h-[2vh] border-[1px] border-solid border-primary"
            : "w-[1.5vh] h-[1.5vh] bg-primary rotate-45"
        }`}
      ></div>
      <div
        className={`transition-all duration-300 ${
          // checkTargetMatch("skills")
          false
            ? "w-[2vh] h-[2vh] border-[1px] border-solid border-primary"
            : "w-[1.5vh] h-[1.5vh] bg-primary rotate-45"
        }`}
      ></div>

      <div className="w-[1.5vh] h-[1.5vh] bg-primary rotate-45"></div>
      <div className="w-[1.5vh] h-[1.5vh] bg-primary rotate-45"></div>
      <div className="w-[1.5vh] h-[1.5vh] bg-primary rotate-45"></div>
    </div>
  );
};

export default RouadMap;
