'use client';

import { motion } from 'framer-motion';
import { Project } from '@/core';
import ugariteLogo from '@/assets/img/ugarite.png';
import bigbangLogo from '@/assets/img/bigbang.png';
import cubetaLogo from '@/assets/img/cubeta.png';
import goDevLogo from '@/assets/img/goedv.png';
import Image from 'next/image';
import Link from 'next/link';

const companies: Project[] = [
	{
		logo: goDevLogo.src,
		title: 'GoDev',
		link: 'go-dev',
		url: 'https://godev.app/',
		description: 'A dynamic startup delivering cutting-edge web solutions to businesses.',
		shadow: '#484D73',
	},
	{
		logo: ugariteLogo.src,
		title: 'Ugaritech',
		link: 'ugaritech',
		url: 'https://ugaritech.ca/',
		description: 'A dynamic startup specializing in innovative web development.',
		shadow: '#34358E',
	},
	{
		logo: cubetaLogo.src,
		title: 'Cubeta',
		link: 'cubeta',
		url: 'https://cubeta.io/',
		description: 'A collective of freelance professionals offering bespoke web solutions.',
		shadow: '#165C98',
	},
	{
		logo: bigbangLogo.src,
		title: 'Big Bang Its',
		link: 'big-bang',
		url: 'https://its.ae/',
		description: 'An emerging tech company specializing in comprehensive IT solutions.',
		shadow: '#04A1DD',
	},
];

function MyWorks() {
	return (
		<section className={`relative min-h-screen flex flex-col items-center bg-primary`}>
			<div className='sm:w-[80%] w-full flex flex-col mt-28 px-12  '>
				<h1 className='text-4xl font-bold text-center mb-8'>A collection of companies that have worked with them</h1>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
					{companies.map((company, index) => (
						<motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
							<div key={index} className='bg-[#2A2E23] rounded-lg p-6 flex flex-col group'>
								<Link href={`/company/${company.link}`} passHref>
									<div
										className={`flex items-center justify-center w-16 h-16 p-2 rounded-lg bg-[#242B1D] mb-4`}
										style={{ filter: `drop-shadow(0 0 8px ${company.shadow})` }}
									>
										<Image
											src={company.logo}
											alt={`${company.title} logo`}
											width={100}
											height={60}
											className='h-12 w-auto object-contain'
										/>
									</div>
									<h3
										className='text-xl font-semibold text-white mb-2 group-hover:text-[--company-name-color] '
										style={
											{
												'--company-name-color': company.shadow,
											} as React.CSSProperties
										}
									>
										{company.title}
									</h3>
									<p className='text-gray-400 flex-grow '>{company.description}</p>
								</Link>
								<motion.p className='text-sm text-muted-foreground !group-hover:text-blue-400' whileHover={{ color: '#2563eb' }}>
									<Link href={`${company.url}`} target='_blank' passHref>
										{company.url}
									</Link>
								</motion.p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
export default MyWorks;
{
	/* 2A2E23 */
}
{
	/* 252B1F */
}
{
	/* 20241B */
}
{
	/* 272D22 */
}
