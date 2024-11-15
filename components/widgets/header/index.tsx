'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Mail, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
	// react-router-dom V5 => useHistory() [history.push()]
	// react-router-dom V6 => useNavigate() [navigate()]
	// Next => useRouter() [router.push()]
	const path = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [drawerX, setDrawerX] = useState('67.2%');

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	// Dynamically adjust the position based on the screen width
	React.useEffect(() => {
		const updateDrawerX = () => {
			const screenWidth = window.innerWidth;
			if (screenWidth >= 1024) {
				setDrawerX('67.2%');
			} else {
				setDrawerX('0');
			}
		};

		updateDrawerX();

		window.addEventListener('resize', updateDrawerX);

		return () => {
			window.removeEventListener('resize', updateDrawerX);
		};
	}, []);

	const menuVariants = {
		closed: {
			opacity: 0,
			transition: {
				staggerChildren: 0.1,
				staggerDirection: -1,
			},
		},
		open: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		closed: {
			y: 20,
			opacity: 0,
		},
		open: {
			y: 0,
			opacity: 1,
		},
	};
	return (
		<div className='fixed top-0 left-0 w-full z-50'>
			{/* Header content */}
			<div className='flex justify-between items-center px-12 py-6 w-full '>
				<Link href={'/'}>
					<h1 className='text-xl font-bold cursor-pointer font-agustina'>Eyad Sharaf Amasri</h1>
				</Link>
				<button onClick={toggleMenu} className='z-50' aria-label='Toggle menu'>
					{isMenuOpen ? <X size={32} /> : <Menu size={32} />}
				</button>
			</div>

			{/* Drawer content */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, x: '100%' }}
						animate={{ opacity: 1, x: drawerX }}
						exit={{ opacity: 0, x: '100%' }}
						transition={{ duration: 0.3 }}
						className='fixed inset-0 z-40 bg-secondary p-12 flex flex-col shadow-md'
					>
						<motion.div
							initial='closed'
							animate='open'
							exit='closed'
							variants={menuVariants}
							className='h-full flex flex-col justify-center px-6 py-12'
						>
							<nav className='space-y-8 mb-16'>
								<motion.a variants={itemVariants} className='block text-4xl font-light hover:text-primary transition-colors'>
									<Link
										href='/'
										onClick={(e) => {
											path === '/' && e.preventDefault();
											path === '/' && document.getElementById('panner')?.scrollIntoView({ behavior: 'smooth' });
										}}
									>
										Home
									</Link>
								</motion.a>
								<motion.a variants={itemVariants} className='block text-4xl font-light hover:text-primary transition-colors'>
									<Link
										href='/#works'
										onClick={(e) => {
											path === '/' && e.preventDefault();
											path === '/' && document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
										}}
									>
										Work
									</Link>
								</motion.a>
								<motion.a
									href='/resume.pdf'
									variants={itemVariants}
									className='block text-4xl font-light hover:text-primary transition-colors'
									target='_blank'
								>
									My Resume
								</motion.a>
							</nav>

							<motion.div variants={itemVariants} className='space-y-8'>
								<h2 className='text-2xl font-light text-primary'>Say Hello</h2>
								<div className='space-y-4'>
									<a href='mailto:iead.sh123@gmail.com' className='flex items-center gap-2 text-lg hover:text-primary transition-colors'>
										<Mail className='h-5 w-5' />
										iead.sh123@gmail.com
									</a>
									<a
										href='https://t.me/eyad_sharaf_almasri'
										className='flex items-center gap-2 text-lg hover:text-primary transition-colors'
										target='_blank'
										rel='noopener noreferrer'
									>
										<ExternalLink className='h-5 w-5' />
										t.me/eyad
									</a>
								</div>
							</motion.div>

							<motion.footer variants={itemVariants} className='absolute bottom-8 px-[5] '>
								<p className='text-sm text-primary'>© {new Date().getFullYear()} Eyad Sharaf Almasri.</p>
							</motion.footer>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Header;
