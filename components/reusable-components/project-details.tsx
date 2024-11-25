import React, { FC } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import ContactTogetherSection from '@/components/sections/send-message/contact-together-section';
import Paginate from '@/components/reusable-components/paginate';
import Image from 'next/image';
import Link from 'next/link';
import Technologies from './technologies';

interface ProjectDetailsProps {
	projectName: string;
	projectDescription: string;
	imagesEmun: { image: any; alt: string }[];
	website?: { link: any; name: string };
	paginate?: { nextProjectLink?: string; prevProjectLink?: string };
	technologies: string[];
}

const ProjectDetails: FC<ProjectDetailsProps> = ({ projectName, projectDescription, imagesEmun, website, paginate, technologies }) => {
	return (
		// <div className='flex flex-col justify-center items-center sm:m-28 m-10 gap-16'>
		<div className='flex flex-col justify-center items-center sm:m-28 gap-16'>
			{/* // <div className='flex flex-col justify-center items-center gap-16 xl:px-[10rem] lg:px-12 p-6'> */}
			<h1 className='font-bold text-4xl '>{projectName}</h1>
			<Carousel
				opts={{
					align: 'start',
				}}
				className='w-full max-w-8xl'
			>
				<CarouselContent>
					{imagesEmun.map((image, index) => (
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
			<div className='w-[90%] text-lg flex flex-col gap-4'>
				<p>
					{projectDescription}
					{website?.link && (
						<Link href={website?.link} target='blank' passHref>
							<span className='text-blue-500 hover:underline'>{website.name}</span>
						</Link>
					)}
				</p>
				<Technologies technologies={technologies} />
				{(paginate?.nextProjectLink || paginate?.prevProjectLink) && (
					<div className='flex justify-between'>
						{paginate?.prevProjectLink && <Paginate direction='left' text='Previous Project' link={paginate.prevProjectLink} />}
						{paginate?.nextProjectLink && <Paginate text='Next Project' link={paginate.nextProjectLink} />}
					</div>
				)}
			</div>
			<Separator orientation='horizontal' className='h-[1px]' />
			{/* Contact Me Form */}
			<ContactTogetherSection />
		</div>
	);
};

export default ProjectDetails;
