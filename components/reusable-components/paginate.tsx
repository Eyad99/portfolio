import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Paginate = ({ text, link, direction = 'right' }: { text: string; link: string; direction?: string }) => {
	const arrowVariants = {
		initial: { x: 0 },
		animate: {
			x: direction === 'right' ? [0, 10, 0] : [0, -10, 0],
			transition: {
				duration: 1.5,
				ease: 'easeInOut',
				repeat: Infinity,
			},
		},
	};
	return (
		<div className='flex items-center w-fit cursor-pointer hover:underline'>
			<Link href={link} passHref>
				{direction == 'right' ? (
					<div className='flex items-center'>
						<span className='sm:text-lg text-md font-semibold'>{text}</span>
						<div className='sm:w-8 w-4 flex justify-center items-center'>
							<motion.div initial='initial' animate='animate' variants={arrowVariants}>
								<ArrowRight className='sm:w-5 w-5 sm:h-5 h-5  ' />
							</motion.div>
						</div>
					</div>
				) : (
					<div className='flex items-center'>
						<div className='sm:w-8 w-4 flex justify-center items-center'>
							<motion.div initial='initial' animate='animate' variants={arrowVariants}>
								<ArrowLeft className='sm:w-5 w-5 sm:h-5 h-5  ' />
							</motion.div>
						</div>
						<span className='sm:text-lg text-md font-semibold'>{text}</span>
					</div>
				)}
			</Link>
		</div>
	);
};

export default Paginate;
