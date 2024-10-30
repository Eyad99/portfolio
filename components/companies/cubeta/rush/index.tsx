import React from 'react';
import Paginate from '@/components/reusable-components/paginate';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// import CustomProductImage from "@/assets/projects/street-league/custom-product.png";

const Rush = () => {
	return (
		<div className='flex flex-col justify-center items-center m-28 gap-16'>
			<h1 className='font-bold text-4xl '>Dtic</h1>

			<Carousel
				opts={{
					align: 'start',
				}}
				className='w-full max-w-8xl'
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

			<div className='w-[90%] text-lg flex flex-col gap-2'>
				<p>
					This software system provides a convenient on-demand delivery service with door-to-door and package delivery options. It offers
					features such as restaurant reservations, coupons, and discounts to enhance user convenience. Users can benefit from a built-in
					loyalty program with gamified rewards, manage their account balances, and access a digital wallet. The system also integrates a
					Delivery Management System (DMS) to streamline the ordering and delivery processes effectively.{' '}
					<Link href='https://lb-merchant.redrush.co/' target='blank' passHref>
						<span className='text-blue-500 hover:underline'>Rush website</span>
					</Link>
				</p>
				<Paginate text='Next Project' link='/company/go-dev/street-league-dashboard' />
			</div>
		</div>
	);
};

export default Rush;
