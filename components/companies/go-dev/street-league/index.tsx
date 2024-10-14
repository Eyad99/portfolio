import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Paginate from "@/components/reusable-components/paginate";
const StreetLeague = () => {
  return (
    <div className="flex flex-col justify-center items-center m-28 gap-16">
      <h1 className="font-bold text-4xl ">StreetLeague</h1>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-2xl "
      >
        <CarouselContent className="">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="">
              <div className="p-1 ">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <CarouselPrevious className=" text-black border-none bg-transparent" /> */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="w-[90%] text-lg">
        <p>
          Street League provides a platform for users to purchase merchandise
          related to football, book football grounds, and participate in
          football-related events and activities.
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
