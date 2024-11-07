import React from 'react';
import ProjectDetails from '@/components/reusable-components/project-details';
import DashboardImage from '@/assets/projects/street-league-dashboard/dashboard.png';
import CateoryListImage from '@/assets/projects/street-league-dashboard/cateory-list.png';
import CustomeristImage from '@/assets/projects/street-league-dashboard/customer.png';
import ViewProductImage from '@/assets/projects/street-league-dashboard/view-product.png';
import OrdersImage from '@/assets/projects/street-league-dashboard/orders.png';
import SortImage from '@/assets/projects/street-league-dashboard/sort.png';

const StreetLeagueDashboard = () => {
	const ImagesEmun = [
		{ image: DashboardImage, alt: 'DashboardImage' },
		{ image: OrdersImage, alt: 'OrdersImage' },
		{ image: CateoryListImage, alt: 'CateoryListImage' },
		{ image: CustomeristImage, alt: 'CustomeristImage' },
		{ image: ViewProductImage, alt: 'ViewProductImage' },
		{ image: SortImage, alt: 'SortImage' },
	];

	return (
		<ProjectDetails
			projectName={'StreetLeague Dashbaord'}
			projectDescription={
				'Designed a multi-vendor e-commerce dashboard for a football-centric platform, allowing seamless management of product listings, transactions, ground bookings, and user participation in events. The dashboard includes sections for payment tracking, inventory management, and a custom design interface for personalized sportswear, streamlining all aspects of the football merchandise and activity experience.'
			}
			imagesEmun={ImagesEmun}
			paginate={{ nextProjectLink: '/company/go-dev/audio-analysis', prevProjectLink: '/company/go-dev/street-league' }}
		/>
	);
};

export default StreetLeagueDashboard;

// import React, { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(ScrollTrigger);

// const index = () => {
// 	const container = useRef();

// 	useGSAP(
// 		() => {
// 			const panels = gsap.utils.toArray('.panel');
// 			gsap.set(panels, {
// 				yPercent: (i) => (i ? 100 : 0),
// 			});

// 			const tl = gsap.timeline({
// 				scrollTrigger: {
// 					trigger: '.sections',
// 					start: 'top top',
// 					end: () => '+=' + 100 * panels.length + '%',
// 					pin: true,
// 					scrub: 1,
// 					markers: true,
// 				},
// 			});

// 			panels.forEach((panel: any, index) => {
// 				if (index) {
// 					tl.to(
// 						panel,
// 						{
// 							yPercent: 0,
// 							ease: 'none',
// 						},
// 						'+=0.25'
// 					);
// 				}
// 			});
// 		},
// 		{ scope: container }
// 	);
// 	return (
// 		<>
// 			{/* <div ref={container}>
// 				<div className='box w-[50px] h-[50px] bg-red-400 box'>BOX</div>
// 			</div> */}
// 			<div className='description  blue'>
// 				<div>
// 					<h1>Layered pinning</h1>
// 					<p>Use pinning to layer panels on top of each other as you scroll.</p>
// 					<div className='scroll-down'>
// 						Scroll down<div className='arrow'></div>
// 					</div>
// 				</div>
// 			</div>
// 			<div className='sections' ref={container as any}>
// 				<div className='w-1/2 bg-purple-800'>
// 					<div className='contento'>
// 						<h2>This is random content</h2>
// 					</div>
// 					<div className='contento'>
// 						<h2>This is another content</h2>
// 					</div>
// 				</div>
// 				<div className='panels'>
// 					<section className='panel bg-red-500'>ONE</section>
// 					<section className='panel bg-orange-500'>TWO</section>
// 					<section className='panel bg-purple-500'>THREE</section>
// 					<section className='panel bg-green-500'>FOUR</section>
// 				</div>
// 			</div>
// 			<section className='spacer'>
// 				<h1>The End!</h1>
// 				<h1>Happy Tweening!</h1>
// 			</section>

// 			{/* <div className='sections'>
// 				<div className='flex flex-col w-1/2 mt-4 relative'>
// 					<section className='bg-red-500  h-screen absolute top-0 bottom-0 w-full'>ONE</section>
// 					<section className='bg-orange-500 h-screen absolute top-20 bottom-0 w-full'>TWO</section>
// 					<section className='bg-purple-500 h-screen absolute top-40 bottom-0 w-full'>THREE</section>
// 					<section className='bg-green-500 h-screen absolute top-60 bottom-0 w-full'>FOUR</section>
// 				</div>
// 			</div> */}
// 		</>
// 	);
// };

// export default index;
