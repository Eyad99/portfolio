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
						<span className='text-lg  font-semibold'>{text}</span>
						<div className='w-8 flex justify-center'>
							<motion.div initial='initial' animate='animate' variants={arrowVariants}>
								<ArrowRight className='w-6 h-6  ' />
							</motion.div>
						</div>
					</div>
				) : (
					<div className='flex items-center'>
						<div className='w-8 flex justify-center'>
							<motion.div initial='initial' animate='animate' variants={arrowVariants}>
								<ArrowLeft className='w-6 h-6  ' />
							</motion.div>
						</div>
						<span className='text-lg font-semibold'>{text}</span>
					</div>
				)}
			</Link>
		</div>
	);
};

export default Paginate;
