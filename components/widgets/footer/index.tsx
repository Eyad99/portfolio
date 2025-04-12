'use client';
import React from 'react';
import Link from 'next/link';
import { Linkedin, Github, Twitter, ArrowRight, Mail, MessageSquare, Gitlab } from 'lucide-react';
import { Separator } from '@radix-ui/react-separator';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Footer = () => {
	const path = usePathname();

	return (
		<section className={`relative min-h-screen bg-primary`}>
			<div className='container mx-auto flex flex-col xl:px-[10rem] lg:px-12 px-6'>
				{/* Animation */}
				<div className='absolute inset-0 overflow-hidden'>
					{[...Array(20)].map((_, i) => (
						<motion.div
							key={i}
							className='absolute bg-gray-500/5 rounded-full'
							style={{
								width: Math.random() * 300 + 50,
								height: Math.random() * 300 + 50,
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
							}}
							animate={{
								x: [0, Math.random() * 100 - 50],
								y: [0, Math.random() * 100 - 50],
								scale: [1, Math.random() + 0.5, 1],
							}}
							transition={{
								duration: Math.random() * 10 + 10,
								repeat: Infinity,
								repeatType: 'reverse',
								ease: 'easeInOut',
							}}
						/>
					))}
				</div>

				<div className='flex flex-col gap-6 sm:py-[4rem] py-[4rem] leading-[3rem] sm:mt-28 mt-12'>
					<motion.h1
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='md:text-4xl sm:text-3xl text-2xl font-bold'
					>
						SAY HELLO
					</motion.h1>
					<div className='flex sm:flex-row flex-col sm:gap-[12rem] gap-[2rem]'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className='space-y-6'
						>
							<motion.div className='group' whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
								<Link
									href='mailto:eyadsharafalmasri@gmail.com'
									className='flex items-center gap-3 sm:text-xl text-lg text-secondary hover:text-[#697565] transition-colors'
								>
									<Mail className='w-6 h-6' />
									<span>eyadsharafalmasri@gmail.com</span>
									<ArrowRight className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity' />
								</Link>
							</motion.div>
							<motion.div className='group' whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
								<Link
									href='https://t.me/eyad_sharaf_almasri'
									target='_blank'
									className='flex items-center gap-3 sm:text-xl text-lg text-secondary hover:text-[#697565] transition-colors'
								>
									<MessageSquare className='w-6 h-6' />
									<span>t.me/eyad</span>
									<ArrowRight className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity' />
								</Link>
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className='space-y-6'
						>
							<motion.div className='group' whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
								<Link
									href='/#works'
									onClick={(e) => {
										path === '/' && e.preventDefault();
										document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
									}}
									className='flex items-center gap-3 sm:text-xl text-lg text-secondary hover:text-[#697565] transition-colors'
								>
									<span>My Work</span>
									<ArrowRight className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity' />
								</Link>
							</motion.div>
							<motion.div className='group' whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
								<Link
									target='_blank'
									href='/senior-frontend-developer-[eyad-sharaf-almasri].pdf'
									className='flex items-center gap-3 sm:text-xl text-lg text-secondary hover:text-[#697565] transition-colors'
								>
									<span>My Resume</span>
									<ArrowRight className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity' />
								</Link>
							</motion.div>
						</motion.div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='mt-[8rem] sm:mb-[4rem] mb-[2rem]'
				>
					<Separator orientation='vertical' className='h-[1px] bg-secondary' />
				</motion.div>

				<div className='flex justify-between items-center sm:flex-row flex-col lg:gap-0 gap-4 mb-4'>
					<motion.span
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='sm:block hidden text-secondary sm:text-xl text-lg'
					>
						© {new Date().getFullYear()} Eyad Sharaf Almasri.{' '}
					</motion.span>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className='flex space-x-4'
					>
						<motion.a
							href='https://www.linkedin.com/in/eyad-sharaf-almasri-16b217213/'
							target='_blank'
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
							aria-label='linkedin'
						>
							<Linkedin className='text-secondary hover:text-[#697565] transition-colors' />
						</motion.a>
						<motion.a
							href='https://github.com/Eyad99'
							target='_blank'
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
							aria-label='github'
						>
							<Github className='text-secondary hover:text-[#697565] transition-colors' />
						</motion.a>
						<motion.a
							href='https://gitlab.com/iead.sh123'
							target='_blank'
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
							aria-label='gitlab'
						>
							<Gitlab className='text-secondary hover:text-[#697565] transition-colors' />
						</motion.a>
						<motion.a
							href='https://x.com/EyadSharaaf'
							target='_blank'
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
							aria-label='twitter'
						>
							<Twitter className='text-secondary hover:text-[#697565] transition-colors' />
						</motion.a>
					</motion.div>

					<motion.span
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='block sm:hidden text-secondary sm:text-xl text-lg'
					>
						© {new Date().getFullYear()} Eyad Sharaf Almasri.{' '}
					</motion.span>
				</div>
			</div>
		</section>
	);
};

export default Footer;
