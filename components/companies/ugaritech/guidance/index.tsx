import React from 'react';
import Paginate from '@/components/reusable-components/paginate';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import HomeImage from '@/assets/projects/guidance/home.png';
import FilesImage from '@/assets/projects/guidance/files.png';
import CourseContentImage from '@/assets/projects/guidance/course-content.png';
import CollaborationImage from '@/assets/projects/guidance/collaboration.png';
import AcadiicImage from '@/assets/projects/guidance/acadiic.png';

const Guidance = () => {
	const ImagesEmun = [
		{ image: HomeImage, alt: 'HomeImage' },
		{ image: FilesImage, alt: 'FilesImage' },
		{ image: CourseContentImage, alt: 'CourseContentImage' },
		{ image: CollaborationImage, alt: 'CollaborationImage' },
		{ image: AcadiicImage, alt: 'AcadiicImage' },
	];

	return (
		<div className='flex flex-col justify-center items-center m-28 gap-16'>
			<h1 className='font-bold text-4xl '>Guidance</h1>

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
					Designed to boost student engagement, this project features interactive tools like discussion forums, peer-to-peer messaging, and
					group collaboration spaces. It includes a flexible user role management system with customizable permissions for administrators,
					instructors, and students. The platform also supports a file management system and enables seamless reuse of shareable content
					from various e-learning platforms through SCORM packages.
				</p>
				<Paginate text='Next Project' link='/company/go-dev/street-league-dashboard' />
			</div>
		</div>
	);
};

export default Guidance;
