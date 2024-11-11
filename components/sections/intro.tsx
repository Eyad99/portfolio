'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Intro = () => {
	const container = useRef<any>();

	useGSAP(
		() => {
			const t1 = gsap.timeline();
			t1.from('#intro-slider', { xPercent: '-100', duration: 1.3, delay: 0.3 })
				.from(['#text-one', '#text-tow', '#text-three'], {
					opacity: 0,
					y: '+=30',
					stagger: 0.5,
				})
				.to(['#text-one', '#text-tow', '#text-three'], {
					opacity: 0,
					y: '-=30',
					delay: 0.3,
					stagger: 0.5,
				})
				.to('#intro-slider', { xPercent: '-100', duration: 1.3 })
				.from('#main', { opacity: 0, delay: 0.5 });
		},
		{ scope: container }
	);
	return (
		<section className='relative' ref={container}>
			<section className='h-screen absolute top-0 left-0 z-[60] w-full flex flex-col gap-10 p-10 bg-secondary' id='intro-slider'>
				<h1 className='text-9xl' id='text-one'>
					Software Engineer
				</h1>
				<h1 className='text-9xl' id='text-tow'>
					Frontend Developer
				</h1>
				<h1 className='text-9xl' id='text-three'>
					Freelancer
				</h1>
			</section>
		</section>
	);
};

export default Intro;
