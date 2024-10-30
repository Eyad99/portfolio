import React from 'react';
import Paginate from '@/components/reusable-components/paginate';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import AudioDetailImage from '@/assets/projects/audio-analysis/audio-details.png';
import DashboardImage from '@/assets/projects/audio-analysis/dasboard.png';
import SpeackersImage from '@/assets/projects/audio-analysis/speackers.png';
import SignInImage from '@/assets/projects/audio-analysis/sign-in.png';
import AudioImage from '@/assets/projects/audio-analysis/audio.png';
import ChartImage from '@/assets/projects/audio-analysis/chart.png';

const VoiceAnalysis = () => {
	const ImagesEmun = [
		{ image: SignInImage, alt: 'SignInImage' },
		{ image: AudioImage, alt: 'AudioImage' },
		{ image: AudioDetailImage, alt: 'AudioDetailImage' },
		{ image: DashboardImage, alt: 'DashboardImage' },
		{ image: ChartImage, alt: 'ChartImage' },
		{ image: SpeackersImage, alt: 'SpeackersImage' },
	];

	return (
		<div className='flex flex-col justify-center items-center m-28 gap-16'>
			<h1 className='font-bold text-4xl '>Voice Analysis</h1>

			<Carousel
				opts={{
					align: 'start',
				}}
				className='w-full max-w-8xl'
			>
				<CarouselContent>
					{ImagesEmun.map((image, index) => (
						<CarouselItem key={index}>
							<div className='p-1 '>
								<Image objectFit='fill' src={image.image} alt={image.alt} />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			<div className='w-[90%] text-lg flex flex-col gap-2'>
				<p>
					This project transforms audio files into text, analyzing conversations to distinguish between speakers and segmenting dialogue
					accordingly. It includes a quality assessment mechanism to evaluate call performance, generating insightful statistics for call
					center teams. The solution enhances call center operations by providing structured conversation breakdowns and metrics to drive
					improved communication and service quality
				</p>
				<Paginate text='Next Project' link='/company/go-dev/street-league' />
			</div>
		</div>
	);
};

export default VoiceAnalysis;
