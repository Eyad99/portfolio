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

import DashboardImage from "@/assets/projects/street-league-dashboard/dashboard.png";
import CateoryListImage from "@/assets/projects/street-league-dashboard/cateory-list.png";
import CustomeristImage from "@/assets/projects/street-league-dashboard/customer.png";
import ViewProductImage from "@/assets/projects/street-league-dashboard/view-product.png";
import OrdersImage from "@/assets/projects/street-league-dashboard/orders.png";
import SortImage from "@/assets/projects/street-league-dashboard/sort.png";

const StreetLeagueDashboard = () => {
  const ImagesEmun = [
    { image: DashboardImage, alt: "DashboardImage" },
    { image: OrdersImage, alt: "OrdersImage" },
    { image: CateoryListImage, alt: "CateoryListImage" },
    { image: CustomeristImage, alt: "CustomeristImage" },
    { image: ViewProductImage, alt: "ViewProductImage" },
    { image: SortImage, alt: "SortImage" },
  ];

  return (
    <div className="flex flex-col justify-center items-center m-28 gap-16">
      <h1 className="font-bold text-4xl ">StreetLeague Dashbaord</h1>

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
        <p>Street League Dashbaord is a platform .</p>
        <Paginate text="Next Project" link="/company/go-dev/audio-analysis" />
      </div>
    </div>
  );
};

export default StreetLeagueDashboard;
