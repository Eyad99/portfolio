import MyWorks from "@/components/sections/my-works";
import Panner from "@/components/sections/panner";
import SendMessage from "@/components/sections/sendMessage";
import Footer from "@/components/widgets/footer";
import Header from "@/components/widgets/header";
import { Fragment } from "react";
import MySkills from "@/components/sections/my-skills";

export default function Home() {
  return (
    <Fragment>
      <Header />
      {/* <div className="snap-always snap-center">
        <Panner />
      </div>

      <div className="snap-always snap-center">
        <MySkills />
      </div> */}

      <div className="snap-always snap-center">
        <MyWorks />
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
