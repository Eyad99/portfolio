'use client';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const CarousalImages = ({ imagesEnum }: { imagesEnum: { image: any; alt: string }[] }) => {
	const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCurrent(api.selectedScrollSnap());
		api.on('select', () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<div className='w-full max-w-8xl'>
			<Carousel
				plugins={[plugin.current] as any}
				opts={{
					align: 'start',
				}}
				setApi={setApi}
				className='w-full'
			>
				<CarouselContent>
					{imagesEnum.map((image, index) => (
						<CarouselItem key={index}>
							<div className='p-1'>
								<Image objectFit='fill' src={image.image} alt={image.alt} />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className='hidden sm:block'>
					<CarouselPrevious />
				</div>
				<div className='hidden sm:block'>
					<CarouselNext />
				</div>
			</Carousel>
			<div className='flex items-center justify-center gap-2 top-2 relative'>
				{imagesEnum.map((_, index) => (
					<button
						key={index}
						className={cn(
							'h-[12px] w-[12px] rounded-full transition-all',
							current === index ? 'bg-text w-4' : 'bg-white border border-text'
						)}
						onClick={() => api?.scrollTo(index)}
						aria-label={`${index}`}
					/>
				))}
			</div>
		</div>
	);
};

export default CarousalImages;
