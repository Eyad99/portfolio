import { Separator } from "@radix-ui/react-separator";
import React from "react";

const Footer = () => {
  return (
    <section
      className={`relative min-h-screen flex flex-col bg-primary`}
      aria-hidden={true}
    >
      <div className="container max-w-screen-xl flex  p-12">
        <div className="bg-green-300">eyad</div>
        <div className="bg-red-100">eyad1</div>
      </div>
      <Separator className="bg-red-500 text-red-300 w-1" />
    </section>
  );
};

export default Footer;
