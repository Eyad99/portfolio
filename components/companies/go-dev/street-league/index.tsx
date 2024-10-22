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

import CustomProductImage from "@/assets/projects/street-league/custom-product.png";
import FilterProductImage from "@/assets/projects/street-league/filter-product.png";
import SingeProductImage from "@/assets/projects/street-league/single-product.png";
import StudiomImage from "@/assets/projects/street-league/studiom.png";
import MyTeamImage from "@/assets/projects/street-league/my-team.png";
import MainImage from "@/assets/projects/street-league/main.png";

const StreetLeague = () => {
  const ImagesEmun = [
    { image: MainImage, alt: "MainImage" },
    { image: MyTeamImage, alt: "MyTeamImage" },
    { image: SingeProductImage, alt: "SingeProductImage" },
    { image: FilterProductImage, alt: "FilterProductImage" },
    { image: CustomProductImage, alt: "CustomProductImage" },
    { image: StudiomImage, alt: "StudiomImage" },
  ];

  return (
    <div className="flex flex-col justify-center items-center m-28 gap-16">
      <h1 className="font-bold text-4xl ">StreetLeague</h1>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-8xl"
      >
        <CarouselContent>
          {ImagesEmun.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1 ">
                <Image objectFit="fill" src={image.image} alt={image.alt} />
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
