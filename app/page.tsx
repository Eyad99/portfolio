import Panner from "@/components/sections/panner";
import Section2 from "@/components/sections/section2";
import Section3 from "@/components/sections/section3";
import Section4 from "@/components/sections/section4";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="snap-always snap-center">
        <Panner />
      </div>
      <div className="snap-always snap-center">
        <Section2 />
      </div>
      <div className="snap-always snap-center">
        <Section3 />
      </div>
      <div className="snap-always snap-center">
        <Section4 />
      </div>
    </Fragment>
  );
}
