import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import localFont from 'next/font/local';
import RouadMap from '@/components/reusable-components/rouad-map';
import Header from '@/components/widgets/header';
import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

const agustina = localFont({
	src: './fonts/Agustina.woff',
	variable: '--font-agustina',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Eyad Sharaf Almasri',
	description: 'Software Engineer | Frontend Developer specializing in React, Next.js, and modern web technologies.',
	applicationName: 'My Portfolio',
	icons: [{ url: '/logo.ico', type: 'image/svg+xml', rel: 'icon' }],
	authors: { name: 'Eyad Sharaf Almasri' },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<meta
					name='keywords'
					content='senior frontend developer,frontend developer, React, Next.js, JavaScript, typescript, web developer, portfolio'
				/>
				<meta name='robots' content='index, follow' />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
				<main className='md:snap-y md:snap-mandatory overflow-y-scroll h-screen scrollbar'>
					<Header agustinaFont={agustina.className} />
					{children}
					<RouadMap />
					<Toaster />
				</main>
			</body>
		</html>
	);
}
