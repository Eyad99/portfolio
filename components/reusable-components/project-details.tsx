import React, { FC } from 'react';
import { Separator } from '@/components/ui/separator';
import ContactTogetherSection from '@/components/sections/send-message/contact-together-section';
import CarousalImages from './carousal-images';
import Technologies from './technologies';
import Paginate from '@/components/reusable-components/paginate';
import Link from 'next/link';

interface ProjectDetailsProps {
	projectName: string;
	projectDescription: string;
	imagesEnum: { image: any; alt: string }[];
	website?: { link: any; name: string };
	paginate?: { nextProjectLink?: string; prevProjectLink?: string; backLink?: string };
	technologies: string[];
}

const ProjectDetails: FC<ProjectDetailsProps> = ({ projectName, projectDescription, imagesEnum, website, paginate, technologies }) => {
	return (
		<div className='container mx-auto flex flex-col justify-center items-center gap-12 xl:px-[10rem] lg:px-12 p-6 pt-28'>
			<div className='flex justify-center flex-col sm:flex-row relative w-full'>
				<div className='flex sm:absolute left-0 top-[6px]'>
					{paginate?.backLink && <Paginate direction='left' text='Back' link={paginate?.backLink} />}
				</div>
				<h1 className='font-bold text-4xl'>{projectName}</h1>
			</div>

			{imagesEnum?.length > 0 && <CarousalImages imagesEnum={imagesEnum} />}

			<div className='text-lg flex flex-col gap-4'>
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
