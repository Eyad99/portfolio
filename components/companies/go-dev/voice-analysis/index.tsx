import React from "react";
import Paginate from "@/components/reusable-components/paginate";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const VoiceAnalysis = () => {
  return (
    <div className="flex flex-col justify-center items-center m-28 gap-16">
      <h1 className="font-bold text-4xl ">Voice Analysis</h1>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-8xl"
      >
        <CarouselContent>
          {/* {ImagesEmun.map((image, index) => (
        <CarouselItem key={index}>
          <div className="p-1 ">
            <Image objectFit="fill" src={image.image} alt={image.alt} />
          </div>
        </CarouselItem>
      ))} */}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="w-[90%] text-lg flex flex-col gap-2">
        <p>Voice Analysis is a platform</p>
        <Paginate text="Next Project" link="/company/go-dev/street-league" />
      </div>
    </div>
  );
};

export default VoiceAnalysis;
