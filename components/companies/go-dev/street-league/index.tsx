import React from 'react';
import Paginate from '@/components/reusable-components/paginate';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import CustomProductImage from '@/assets/projects/street-league/custom-product.png';
import FilterProductImage from '@/assets/projects/street-league/filter-product.png';
import SingeProductImage from '@/assets/projects/street-league/single-product.png';
import StudiomImage from '@/assets/projects/street-league/studiom.png';
import MyTeamImage from '@/assets/projects/street-league/my-team.png';
import MainImage from '@/assets/projects/street-league/main.png';
import { Separator } from '@/components/ui/separator';
import ContactMeForm from '@/components/sections/send-message/contact-me-form';

const StreetLeague = () => {
	const ImagesEmun = [
		{ image: MainImage, alt: 'MainImage' },
		{ image: MyTeamImage, alt: 'MyTeamImage' },
		{ image: SingeProductImage, alt: 'SingeProductImage' },
		{ image: FilterProductImage, alt: 'FilterProductImage' },
		{ image: CustomProductImage, alt: 'CustomProductImage' },
		{ image: StudiomImage, alt: 'StudiomImage' },
	];

	return (
		<div className='flex flex-col justify-center items-center sm:m-28 m-10 gap-16'>
			<h1 className='font-bold text-4xl '>StreetLeague</h1>
			<Carousel
				opts={{
					align: 'start',
				}}
				className='w-full max-w-8xl'
			>
				<CarouselContent>
					{ImagesEmun.map((image, index) => (
						<CarouselItem key={index}>
							<div className='p-1 '>
								<Image objectFit='fill' src={image.image} alt={image.alt} />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<div className='w-[90%] text-lg flex flex-col gap-2'>
				<p>
					Street League is a platform centered around competitive sports leagues and events. It offers a space for teams and players to
					engage in various sports competitions. The site provides registration options, event details, and access to their shop for sports
					gear and accessories. Additionally, users can follow updates and connect with the community through the platform. It also offers
					downloadable apps for easy access to schedules, results, and other relevant information. For more details,you can visit{' '}
					<Link href='https://streetleague.ae/' target='blank' passHref>
						<span className='text-blue-500 hover:underline'>Street League's website</span>
					</Link>
				</p>
				<Paginate text='Next Project' link='/company/go-dev/street-league-dashboard' />
			</div>
			<Separator orientation='horizontal' className='h-[1px]' />
			{/* Contact Me Form */}
			<section className='w-full flex md:flex-row flex-col gap-4'>
				<div className='md:w-[45%] w-full'>
					<h1 className='lg:text-7xl md:text-5xl text-3xl md:w-[80%] w-full font-bold'>Let's work together!</h1>
					<p className='md:text-xl text-2xl my-4 md:w-[90%] w-full'>
						Looking to create something exceptional? Let's collaborate and make it happen
					</p>
				</div>

				<div className='md:w-[55%] w-full'>
					<ContactMeForm />
				</div>
			</section>
		</div>
	);
};

export default StreetLeague;
