import MyWorks from "@/components/sections/my-works";
import Panner from "@/components/sections/panner";
import Section3 from "@/components/sections/section3";
import SendMessage from "@/components/sections/sendMessage";
import Footer from "@/components/widgets/footer";
import Header from "@/components/widgets/header";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <div className="snap-always snap-center">
        <Panner />
      </div>
      <div className="snap-always snap-center">
        <MyWorks />
      </div>
      <div className="snap-always snap-center">
        <Section3 />
      </div>
      <div className="snap-always snap-center">
        <SendMessage />
      </div>
      <div className="snap-always snap-center">
        <Footer />
      </div>
    </Fragment>
  );
}
