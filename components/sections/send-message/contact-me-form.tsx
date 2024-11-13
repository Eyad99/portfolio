'use client';

import { LoaderIcon, Send } from 'lucide-react';
import { useFormik } from 'formik';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import emailjs from '@emailjs/browser';
import * as yup from 'yup';

const ContactMeForm = ({ formClassName, buttonCentering }: { formClassName?: string; buttonCentering?: boolean }) => {
	const { toast } = useToast();

	const initialValues = {
		name: '',
		email: '',
		message: '',
		loading: false,
	};

	const handleFormSubmit = async (values: any, { setFieldValue, resetForm }: any) => {
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
					resetForm({ name: '', email: '', message: '', loading: false });
					toast({
						variant: 'secondary',
						title: 'The process of sending the message has been completed.',
						description: "I'll get back to you as soon as possible.",
					});
				},
				(error) => {
					setFieldValue('loading', false);
					console.log('FAILED...', error.text);
					toast({
						variant: 'destructive',
						title: 'Error please try again',
					});
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
		<form className={formClassName} onSubmit={handleSubmit}>
			<div className='grid grid-cols-2 gap-6 mb-6 '>
				<div className='col-span-2 md:col-span-1 flex flex-col gap-2'>
					<Label htmlFor='name' className='text-lg'>
						Your Name
					</Label>
					<Input
						type='text'
						name='name'
						value={values.name}
						placeholder='Enter your name'
						className={!!touched.name && !!errors.name ? 'md:h-[3rem] border-primary animate-shake' : 'md:h-[3rem]'}
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
						name='email'
						value={values.email}
						placeholder='Enter your email'
						className={!!touched.email && !!errors.email ? 'md:h-[3rem] border-primary animate-shake' : 'md:h-[3rem]'}
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
							!!touched.message && !!errors.message ? 'resize-none md:h-[5rem] border-primary animate-shake' : 'resize-none md:h-[5rem]'
						}
						placeholder='Hi, I believe we should implement a design system for our products at Company X. How soon would you be available for a meeting to discuss this further?'
						name='message'
						value={values.message}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>
			</div>
			<div className={`flex ${buttonCentering ? 'justify-center' : ''}`}>
				<Button
					className='w-[30%] hover:before:bg-[#3C3D37] relative h-[50px] overflow-hidden border border-[#3C3D37] px-3
					 text-[#3C3D37] transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0
					  before:bg-[#3C3D37] before:transition-all before:duration-500 hover:text-white hover:shadow-[#3C3D37] hover:before:left-0
					   hover:before:w-full '
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
	);
};

export default ContactMeForm;
