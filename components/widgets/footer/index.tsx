import { Separator } from '@radix-ui/react-separator';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<section className={`relative min-h-screen flex flex-col bg-primary`} aria-hidden={true} id='footer'>
			<div className='flex flex-col md:mt-28 mt-14 lg:px-[10rem] px-12 py-[4rem] leading-[3rem]'>
				<div className='text-2xl uppercase font-bold'>say hello</div>
				<div className='flex sm:flex-row flex-col sm:gap-[12rem] gap-[2rem]'>
					{/* Section One */}
					<ul className='leading-[3rem] flex flex-col'>
						<Link href='mailto:iead.sh123@gmail.com' className='text-secondary text-opacity-6'>
							iead.sh123@gmail
						</Link>

						<Link
							href='https://t.me/eyad_sharaf_almasri'
							className='text-secondary text-opacity-6'
							target='_blank'
							rel='noopener noreferrer'
						>
							t.me/eyad
						</Link>
					</ul>
					{/* Section Tow */}
					<ul className='leading-[3rem] flex flex-col'>
						<Link href={'#'} className='text-secondary text-opacity-6'>
							My Work
						</Link>
						<Link href={'#'} className='text-secondary text-opacity-6'>
							My Resume
						</Link>
					</ul>
				</div>
			</div>

			<div className='lg:px-[10rem] px-12 mt-[8rem] mb-[4rem]'>
				<Separator orientation='vertical' className='h-[1px] bg-secondary  ' />
			</div>

			<div className='lg:px-[10rem] px-12 flex justify-between sm:flex-row flex-col lg:gap-0 gap-4'>
				<span className='sm:block hidden'>© {new Date().getFullYear()} Eyad Sharaf Almasri.</span>
				<div className='flex gap-6'>
					<Link
						href='https://www.linkedin.com/in/eyad-sharaf-almasri-16b217213/'
						className='text-secondary text-opacity-6 uppercase'
						target='_blank'
						rel='noopener noreferrer'
					>
						ln
					</Link>
					<Link
						href='https://github.com/Eyad99'
						className='text-secondary text-opacity-6 uppercase'
						target='_blank'
						rel='noopener noreferrer'
					>
						gh
					</Link>
					<Link
						href='https://gitlab.com/iead.sh123'
						className='text-secondary text-opacity-6 uppercase'
						target='_blank'
						rel='noopener noreferrer'
					>
						gl
					</Link>
					<Link
						href='https://x.com/EyadSharaaf'
						className='text-secondary text-opacity-6 uppercase'
						target='_blank'
						rel='noopener noreferrer'
					>
						tw
					</Link>
				</div>

				<span className='sm:hidden block'>© {new Date().getFullYear()} Eyad Sharaf Almasri.</span>
			</div>
		</section>
	);
};

export default Footer;
