import ContactMeForm from './contact-me-form';

function SendMessage() {
	return (
		<section className={`min-h-screen flex flex-col items-center gap-[1rem]`} aria-hidden={true} id='contact'>
			<section className='sm:w-[75%] w-full md:mt-28 mt-14 h-fit text-center p-12'>
				<h1 className='max-md:text-3xl text-5xl mb-2 font-bold'>Send me a message!</h1>
				<span className='max-md:text-lg text-xl'>Got a question or proposal, or just want to say hello? Go ahead.</span>
			</section>

			<ContactMeForm formClassName={'lg:w-1/2 sm:w-[75%] w-full md:p-12 max-md:px-12 max-md:py-8'} buttonCentering={true} />
		</section>
	);
}
export default SendMessage;
