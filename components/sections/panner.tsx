'use client';

import { Code2, Sparkles, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import person from '@/assets/img/profile.png';
import Image from 'next/image';

export default function Panner() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};
	return (
		<div className='flex min-h-screen lg:flex-row flex-col' id='panner'>
			{/* Left side */}
			<motion.div
				initial='hidden'
				animate='visible'
				variants={containerVariants}
				className='lg:w-[68%] w-full bg-[#181C14] p-12 flex flex-col justify-between gap-[6rem]'
			>
				<div className='lg:mt-28 mt-14'>
					<motion.h1 variants={itemVariants} className='lg:text-6xl text-3xl font-bold mb-8'>
						Frontend Developer.
					</motion.h1>
					<motion.p variants={itemVariants} className='lg:text-4xl text-xl text-white mb-8'>
						I like to craft solid and scalable frontend products with great user experiences.
					</motion.p>
					<motion.div variants={itemVariants}>
						<motion.div variants={itemVariants}>
							<Button
								className='sm:w-[30%] w-full text-secondary relative h-[50px] overflow-hidden border px-3
									transition-all before:absolute before:left-0 before:top-0 before:bottom-0 before:bg-secondary
									before:transition-all before:duration-500 before:w-0 hover:before:w-full
									hover:text-primary'
							>
								<div className='flex justify-between items-center gap-4 relative z-10'>
									<FileText />
									<span className='sm:text-[16px] text-[12px]'>See My Resume</span>
								</div>
							</Button>
						</motion.div>
					</motion.div>
				</div>

				<motion.div variants={containerVariants} className='grid sm:grid-cols-2 gap-8'>
					<motion.div variants={itemVariants} className='space-y-2'>
						<div className='flex items-center gap-2'>
							<Code2 className='w-5 h-5' />
							<h3 className='font-semibold'>Highly skilled at</h3>
						</div>
						<p className='text-white sm:text-[16px] text-[12px]'>Progressive enhancement, design systems & UI Engineering.</p>
					</motion.div>

					<motion.div variants={itemVariants} className='space-y-2'>
						<div className='flex items-center gap-2'>
							<Sparkles className='w-5 h-5' />
							<h3 className='font-semibold'>Proven experience</h3>
						</div>
						<p className='text-white sm:text-[16px] text-[12px]'>Building successful products for clients across several countries.</p>
					</motion.div>
				</motion.div>
			</motion.div>

			{/* Right side */}
			<div className='lg:w-[32%] w-[100%] bg-[#F5F5F5] p-12 relative'>
				<div className='h-full flex items-center justify-center'>
					<div className='w-80 h-80 bg-gray-300 rounded-full overflow-hidden'>
						<Image src={person} alt='Frontend Developer' className='w-full h-full object-cover' />
					</div>
				</div>
			</div>
		</div>
	);
}
