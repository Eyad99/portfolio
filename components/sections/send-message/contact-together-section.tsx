import React from 'react';
import ContactMeForm from './contact-me-form';

const ContactTogetherSection = () => {
	return (
		<section className='w-full flex md:flex-row flex-col gap-4'>
			<div className='md:w-[45%] w-full'>
				<h1 className='lg:text-7xl md:text-5xl text-3xl md:w-[80%] w-full font-bold'>Let's work together!</h1>
				<p className='md:text-xl text-2xl my-4 md:w-[90%] w-full'>
					Looking to create something exceptional? Let's collaborate and make it happen
				</p>
			</div>

			<div className='md:w-[55%] w-full'>
				<ContactMeForm />
			</div>
		</section>
	);
};

export default ContactTogetherSection;
