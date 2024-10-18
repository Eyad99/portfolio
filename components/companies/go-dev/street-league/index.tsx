import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Paginate from "@/components/reusable-components/paginate";
import MainImage from "@/assets/projects/street-league/main.png";
import Image from "next/image";
import Link from "next/link";

const StreetLeague = () => {
  return (
    <div className="flex flex-col justify-center items-center m-28 gap-16">
      <h1 className="font-bold text-4xl ">StreetLeague</h1>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-8xl"
      >
        <CarouselContent className="">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 ">
                <Image objectFit="fill" src={MainImage} alt="MainImage" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="w-[90%] text-lg flex flex-col gap-2">
        <p>
          Street League is a platform centered around competitive sports leagues
          and events. It offers a space for teams and players to engage in
          various sports competitions. The site provides registration options,
          event details, and access to their shop for sports gear and
          accessories. Additionally, users can follow updates and connect with
          the community through the platform. It also offers downloadable apps
          for easy access to schedules, results, and other relevant information.
          For more details,you can visit{" "}
          <Link href="https://streetleague.ae/" target="blank" passHref>
            <span className="text-blue-500 hover:underline">
              Street League's website
            </span>
            .
          </Link>
        </p>
        <Paginate
          text="Next Project"
          link="/company/go-dev/street-league-dashboard"
        />
      </div>
    </div>
  );
};

export default StreetLeague;
