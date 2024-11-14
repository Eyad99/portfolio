'use client';

import { useMemo } from 'react';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { cn } from '@/lib/utils';

import Image from 'next/image';
import framerMotionIcon from '@/assets/img/my-skills/framer-motion.svg';
import tailwindCssIcon from '@/assets/img/my-skills/tailwindCss.svg';
import materialUiIcon from '@/assets/img/my-skills/material-ui.svg';
import reactQueryIcon from '@/assets/img/my-skills/react-query.svg';
import storyBookIcon from '@/assets/img/my-skills/story-book.svg';
import cypressIcon from '@/assets/img/my-skills/cypress.svg';
import zustandIcon from '@/assets/img/my-skills/zustand.svg';
import reactIcon from '@/assets/img/my-skills/react.svg';
import reduxIcon from '@/assets/img/my-skills/redux.svg';
import nextIcon from '@/assets/img/my-skills/next-js.svg';
import htmlIcon from '@/assets/img/my-skills/html.svg';
import jestIcon from '@/assets/img/my-skills/jest.svg';
import cssIcon from '@/assets/img/my-skills/css.svg';
import jsIcon from '@/assets/img/my-skills/js.svg';

const GridClassName = 'grid auto-cols-[96px] gap-6 justify-start mb-6 relative whitespace-nowrap grid-flow-col ';
const CardClassName =
	'flex justify-center items-center w-[96px] h-[96px] cursor-pointer rounded-xl border border-[rgba(38,38,38,.7)] bg-[rgba(236,236,236,0.62)] p-6 transition-all duration-300';

const ImagesObj: {
	[key: string]: { image: any; alt: string; color: string };
} = {
	tailwindCss: {
		image: tailwindCssIcon,
		alt: 'tailwindCssIcon',
		color: '#18B9B9',
	},
	materialUi: {
		image: materialUiIcon,
		alt: 'materialUiIcon',
		color: '#0081CB',
	},
	framerMotion: {
		image: framerMotionIcon,
		alt: 'framerMotionIcon',
		color: '#000000',
	},
	storyBook: { image: storyBookIcon, alt: 'storyBookIcon', color: '#FE528C' },
	reactQuery: { image: reactQueryIcon, alt: 'jsIcon', color: '#FD6877' },
	react: { image: reactIcon, alt: 'reactIcon', color: '#00d6df' },
	redux: { image: reduxIcon, alt: 'reduxIcon', color: '#8D69C6' },
	zustand: { image: zustandIcon, alt: 'zustandIcon', color: '#65605B' },
	cpress: { image: cypressIcon, alt: 'cypressIcon', color: '#000000' },
	next: { image: nextIcon, alt: 'nextIcon', color: '#363636' },
	html: { image: htmlIcon, alt: 'htmlIcon', color: '#E86F50' },
	jest: { image: jestIcon, alt: 'jestIcon', color: '#A25369' },
	css: { image: cssIcon, alt: 'cssIcon', color: '#4EB5E1' },
	js: { image: jsIcon, alt: 'jsIcon', color: '#FDD24F' },
};

function MySkills() {
	const width = useWindowWidth();
	const images: { [key: string]: { image: any; alt: string; color: string } } = useMemo(() => {
		const getKey = (breakpoints: number[], indices: string[]): string => {
			for (let i = 0; i < breakpoints.length; i++) {
				if (width > breakpoints[i]) return indices[i];
			}
			return indices[indices.length - 1];
		};

		return {
			[getKey([1285, 840, 740], ['2-3', '2-2', '2-1', '2-1'])]: ImagesObj.html,
			[getKey([1285, 840, 740], ['2-4', '2-3', '2-2', '2-2'])]: ImagesObj.css,
			[getKey([1285, 840, 740], ['2-5', '2-4', '2-3', '2-3'])]: ImagesObj.js,
			[getKey([1285, 840, 740, 620, 500], ['2-6', '2-5', '2-4', '2-4', '2-4', '3-1'])]: ImagesObj.react,
			[getKey([1285, 840, 740, 620, 500], ['2-7', '2-6', '2-5', '2-5', '3-1', '3-2'])]: ImagesObj.next,
			[getKey([1285, 960, 840, 740, 620, 500], ['2-8', '2-7', '3-2', '2-6', '3-1', '3-2', '3-3'])]: ImagesObj.reactQuery,
			[getKey([1285, 1200, 960, 840, 740, 620, 500, 450], ['2-9', '2-8', '3-2', '3-3', '3-1', '3-2', '3-3', '3-4', '4-1'])]:
				ImagesObj.redux,
			[getKey([1450, 1285, 1200, 960, 840, 740, 620, 500, 450], ['2-10', '3-3', '2-9', '3-3', '3-4', '3-2', '3-3', '3-4', '4-1', '4-2'])]:
				ImagesObj.zustand,
			[getKey([1450, 1285, 1200, 960, 840, 740, 620, 500, 450], ['3-3', '3-4', '3-2', '3-4', '3-5', '3-3', '3-4', '4-1', '4-2', '4-3'])]:
				ImagesObj.storyBook,
			[getKey([1450, 1285, 1200, 960, 840, 740, 620, 500, 450], ['3-4', '3-5', '3-3', '3-5', '3-6', '3-4', '3-5', '4-2', '4-3', '5-1'])]:
				ImagesObj.jest,
			[getKey([1450, 1285, 1200, 960, 840, 740, 620, 500, 450], ['3-5', '3-6', '3-4', '3-6', '4-2', '3-5', '4-1', '4-3', '5-1', '5-2'])]:
				ImagesObj.cpress,
			[getKey([1450, 1285, 1200, 960, 840, 740, 620, 500, 450], ['3-6', '3-7', '3-5', '3-7', '4-3', '3-6', '4-2', '4-4', '5-2', '5-3'])]:
				ImagesObj.tailwindCss,
			[getKey(
				[1450, 1285, 1200, 1080, 960, 840, 740, 620, 500, 450],
				['3-7', '3-8', '3-6', '3-8', '4-2', '4-4', '4-1', '4-3', '5-1', '5-3', '6-1']
			)]: ImagesObj.materialUi,
			[getKey(
				[1450, 1285, 1200, 1080, 960, 840, 740, 620, 500, 450],
				['3-8', '3-9', '3-7', '4-2', '4-3', '4-5', '4-2', '4-4', '5-2', '5-4', '6-2']
			)]: ImagesObj.framerMotion,
		};
	}, [width]);

	const gridItems = useMemo(() => {
		return Array.from({
			length: width > 620 ? 5 : width < 620 && width > 450 ? 7 : 9,
		}).map((_, index) => (
			<div
				key={index}
				className={GridClassName}
				style={{
					transform: `translate3d(${index % 2 === 0 ? '-24px' : '24px'}, 0, 0)`,
				}}
			>
				{Array.from({ length: Math.floor(width / 96) }).map((_, ind) => {
					const key = `${index + 1}-${ind + 1}`;
					const imageData = images[key as keyof typeof images];
					return (
						<div
							key={ind}
							className={cn(CardClassName, {
								'flex flex-col hover:[box-shadow:0_0_30px_var(--card-color)]': imageData,
								'transform scale-100 hover:scale-90 translate-z-0 transition-transform duration-1000 hover:duration-200 ease hover:ease-in-out':
									!imageData,
							})}
							style={
								{
									'--card-color': imageData?.color,
								} as React.CSSProperties
							}
						>
							{imageData && (
								<Image
									width={50}
									height={50}
									src={imageData.image}
									alt={imageData.alt}
									className='select-none'
									style={{
										userSelect: 'none',
										filter: `drop-shadow(0 0 .8rem color-mix(in srgb, ${imageData.color} 40%, transparent))`,
									}}
								/>
							)}
						</div>
					);
				})}
			</div>
		));
	}, [width]);

	return (
		<section className='relative min-h-screen flex flex-col' aria-hidden={true} id='skills'>
			<div className='w-full flex justify-center absolute top-20'>
				<p className='z-10 font-bold text-center lg:w-[60%] md:w-[80%] w-full lg:text-3xl sm:text-2xl text-xl'>
					Empowering projects with advanced skills in modern frameworks and tools
				</p>
			</div>
			<section
				className='mt-24 relative overflow-hidden'
				style={{
					maskImage: `linear-gradient(180deg, transparent 0%, #ffffff 200px, #ffffff calc(100vh - 300px), transparent 100%)`,
				}}
			>
				<div
					style={{
						maskImage:
							width > 840 ? `linear-gradient(90deg, transparent 0%, #ffffff 300px, #ffffff calc(100vw - 300px), transparent 100%)` : '',
					}}
				>
					{gridItems}
				</div>
			</section>
		</section>
	);
}

export default MySkills;
