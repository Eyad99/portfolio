'use client';
import React, { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useParams } from 'next/navigation';
import { Project } from '@/core';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
	const { companyName } = useParams();

	return (
		<motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }} className='container mx-auto'>
			<Card className='cursor-pointer min-h-[290px]'>
				<Link href={`/company/${companyName}/${project.link}`} passHref>
					<CardHeader className='p-12 bg-[rgba(236,236,236,0.62)] h-[170px] flex items-center justify-center rounded-t-sm '>
						<Image src={project.logo} alt={`${project.title} logo`} width={130} height={60} className='h-20 object-contain ' />
					</CardHeader>
				</Link>
				<CardContent className='p-6 h-[120px] flex justify-center flex-col'>
					<CardTitle className='text-xl mb-2 text-[#474747]'>{project.title}</CardTitle>
					<motion.p className='text-sm text-muted-foreground' whileHover={{ color: '#2563eb' }}>
						<Link href={`${project.url}`} target='_blank' passHref>
							{project.url}
						</Link>
					</motion.p>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default ProjectCard;
