import ContactMeForm from './contact-me-form';

function SendMessage() {
	return (
		<section className={` min-h-screen flex flex-col items-center gap-[1rem]`}>
			<section className='sm:w-[75%] w-full h-fit text-center md:mt-28 mt-12 md:p-12 p-6'>
				<h1 className='md:text-4xl text-3xl mb-2 font-bold'>Send me a message!</h1>
				<span className='max-md:text-lg text-xl'>Got a question or proposal, or just want to say hello? Go ahead.</span>
			</section>

			<ContactMeForm formClassName={'lg:w-1/2 sm:w-[75%] w-full md:px-12 px-6 py-6'} buttonCentering={true} />
		</section>
	);
}
export default SendMessage;
