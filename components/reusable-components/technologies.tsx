import React from 'react';

const Technologies = ({ technologies }: { technologies: string[] }) => {
	return (
		<section className='flex flex-wrap gap-2'>
			{technologies?.map((technology: string) => (
				<div
					key={technology}
					className='bg-primary text-secondary w-fit h-[30px] rounded-md text-center justify-center items-center flex p-2 '
				>
					<h5 className='text-sm'>{technology}</h5>
				</div>
			))}
		</section>
	);
};

export default Technologies;
