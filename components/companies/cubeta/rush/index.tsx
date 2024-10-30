import React from 'react';
import Paginate from '@/components/reusable-components/paginate';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import DashboardImage from '@/assets/projects/rush/dashboard.png';
import MapImage from '@/assets/projects/rush/map.png';
import SignInImage from '@/assets/projects/rush/sign-in.png';
import DriverImage from '@/assets/projects/rush/driver.png';
import OrderImage from '@/assets/projects/rush/order.png';
import OrderDetailsImage from '@/assets/projects/rush/order-details.png';
import PaymentImage from '@/assets/projects/rush/payment.png';

const Rush = () => {
	const ImagesEmun = [
		{ image: SignInImage, alt: 'SignInImage' },
		{ image: DashboardImage, alt: 'DashboardImage' },
		{ image: MapImage, alt: 'MapImage' },
		{ image: DriverImage, alt: 'DriverImage' },
		{ image: OrderImage, alt: 'OrderImage' },
		{ image: OrderDetailsImage, alt: 'OrderDetailsImage' },
		{ image: PaymentImage, alt: 'PaymentImage' },
	];
	return (
		<div className='flex flex-col justify-center items-center m-28 gap-16'>
			<h1 className='font-bold text-4xl '>Rush</h1>

			<Carousel
				opts={{
					align: 'start',
				}}
				className='w-full  max-w-8xl'
			>
				<CarouselContent className=''>
					{ImagesEmun.map((image, index) => (
						<CarouselItem key={index}>
							<div className='p-1 '>
								<Image objectFit='fill' src={image.image} alt={image.alt} className='shadow-md' />
							</div>
						</CarouselItem>
					))}
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
