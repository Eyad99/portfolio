'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const RouadMap = () => {
	const pathname = usePathname();
	const [activeSection, setActiveSection] = useState('panner');

	useEffect(() => {
		const sections = ['panner', 'skills', 'works', 'contact', 'footer'];
		const observers = [] as any;

		sections.forEach((id) => {
			const section = document.getElementById(id);
			if (section) {
				const observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								setActiveSection(id);
							}
						});
					},
					{ threshold: 0.5 }
				);
				observer.observe(section);
				observers.push(observer);
			}
		});

		return () => {
			observers.forEach((observer: any) => observer.disconnect());
		};
	}, []);

	return (
		pathname === '/' && (
			<div className='h-[20%] absolute bottom-20 right-[4%] flex flex-col gap-5 items-center'>
				{['panner', 'skills', 'works', 'contact', 'footer'].map((id, index) => {
					console.log('ididid', id);
					return (
						<Link
							key={id}
							href={`/#${id}`}
							onClick={(e) => {
								e.preventDefault();
								document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
							}}
						>
							<div
								className={`transition-all duration-300 ${
									activeSection === id
										? `w-[2vh] h-[2vh]  ${
												activeSection == 'works' || activeSection == 'footer' ? 'border-secondary' : 'border-primary'
										  } border-[1px]`
										: `w-[1.5vh] h-[1.5vh] ${
												activeSection == 'works' || activeSection == 'footer' ? 'bg-secondary' : 'bg-primary'
										  } rotate-45`
								}`}
							></div>
						</Link>
					);
				})}
			</div>
		)
	);
};

export default RouadMap;
