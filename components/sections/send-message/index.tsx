'use client';

import { LoaderIcon, Send } from 'lucide-react';
import { useFormik } from 'formik';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import emailjs from '@emailjs/browser';
import * as yup from 'yup';
import { handleSendMessage } from '@/actions/sendMessageAction';

function SendMessage() {
	const initialValues = {
		name: '',
		email: '',
		message: '',
		loading: false,
	};

	const handleFormSubmit = async (values: any, { setFieldValue }: any) => {
		setFieldValue('loading', true);
		const tempateParams = { name: values.name, email: values.email, message: values.message } as any;
		// await handleSendMessage(tempateParams);

		emailjs
			.send(process.env.NEXT_PUBLIC_SERVICE_ID ?? '', process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '', tempateParams, {
				publicKey: process.env.NEXT_PUBLIC_USER_ID ?? '',
			})
			.then(
				() => {
					setFieldValue('loading', false);
				},
				(error) => {
					setFieldValue('loading', false);
					console.log('FAILED...', error.text);
				}
			);
	};

	const formSchema = yup.object().shape({
		name: yup.string().required(`Name is required`),
		email: yup.string().required(`Email address is required`),
		message: yup.string().required(`Message is required`),
	});

	const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
		initialValues,
		onSubmit: handleFormSubmit,
		validationSchema: formSchema,
	});
	return (
		<section className={`min-h-screen flex flex-col items-center gap-[1rem]`} aria-hidden={true} id='contact'>
			<section className='sm:w-[75%] w-full md:mt-28 mt-14 h-fit text-center p-12'>
				<h1 className='max-md:text-3xl text-5xl mb-2 font-bold'>Send me a message!</h1>
				<span className='max-md:text-lg text-xl'>Got a question or proposal, or just want to say hello? Go ahead.</span>
			</section>

			{/* Form */}
			<form className=' lg:w-1/2 sm:w-[75%] w-full md:p-12 max-md:px-12 max-md:py-8' onSubmit={handleSubmit}>
				<div className='grid grid-cols-2 gap-6 mb-6 '>
					<div className='col-span-2 md:col-span-1 flex flex-col gap-2'>
						<Label htmlFor='name' className='text-lg'>
							Your Name
						</Label>
						<Input
							type='text'
							id='name'
							name='name'
							placeholder='Enter your name'
							className={!!touched.name && !!errors.name ? 'md:h-[3rem] border-red-500 animate-shake' : 'md:h-[3rem]'}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</div>

					<div className='col-span-2 md:col-span-1 flex flex-col gap-2'>
						<Label htmlFor='email' className='text-lg'>
							Email
						</Label>
						<Input
							type='email'
							id='email'
							name='email'
							placeholder='Enter your email'
							className={!!touched.email && !!errors.email ? 'md:h-[3rem] border-red-500 animate-shake' : 'md:h-[3rem]'}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</div>

					<div className='col-span-2 flex flex-col gap-2'>
						<Label htmlFor='message' className='text-lg'>
							Your message
						</Label>
						<Textarea
							className={
								!!touched.message && !!errors.message ? 'resize-none md:h-[5rem] border-red-500 animate-shake' : 'resize-none md:h-[5rem]'
							}
							placeholder='Hi, I believe we should implement a design system for our products at Company X. How soon would you be available for a meeting to discuss this further?'
							id='message'
							name='message'
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</div>
				</div>
				<div className='flex justify-center'>
					<Button
						className='w-[30%] hover:before:bg-redborder-[#3C3D37] relative h-[50px] overflow-hidden border border-[#3C3D37]  px-3 text-[#3C3D37] transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#3C3D37] before:transition-all before:duration-500 hover:text-white hover:shadow-[#3C3D37] hover:before:left-0 hover:before:w-full '
						variant={'outline'}
						disabled={values.loading}
					>
						<div className='flex justify-between items-center gap-4 relative z-10'>
							<span>{values.loading ? 'Sending' : 'Send!'}</span>
							{values.loading ? <LoaderIcon className='animate-spin' /> : <Send />}
						</div>
					</Button>
				</div>
			</form>
		</section>
	);
}
export default SendMessage;
