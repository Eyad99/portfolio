import React, { FC } from 'react';
import { Separator } from '@/components/ui/separator';
import { Project } from '@/core';
import ContactTogetherSection from '@/components/sections/send-message/contact-together-section';
import ProjectCard from './project-card';
import Paginate from './paginate';

interface CompanyDetailsProps {
	projects: Project[];
	paginate?: { nextProjectLink?: string; prevProjectLink?: string };
}
const CompanyDetails: FC<CompanyDetailsProps> = ({ projects, paginate }) => {
	return (
		<section className={`flex flex-col justify-center m-auto sm:w-[75%] w-full p-6 gap-10`} aria-hidden={true}>
			<div className='flex flex-col justify-center items-center gap-4'>
				<h1 className='font-bold'>
					<span className='text-4xl'>/</span>
					<span className='text-[#474747] text-3xl'>Work.</span>
				</h1>
				<p className='text-xl font-bold text-center '>A collection of projects I've worked on.</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
			{(paginate?.nextProjectLink || paginate?.prevProjectLink) && (
				<div className='flex justify-between'>
					{paginate?.prevProjectLink && <Paginate direction='left' text='Previous Project' link={paginate.prevProjectLink} />}
					{paginate?.nextProjectLink && <Paginate text='Next Project' link={paginate.nextProjectLink} />}
				</div>
			)}
			<Separator orientation='horizontal' className='h-[1px]' />
			{/* Contact Me Form */}
			<ContactTogetherSection />
		</section>
	);
};

export default CompanyDetails;