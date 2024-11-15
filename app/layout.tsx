import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/widgets/header';
import RouadMap from '@/components/reusable-components/rouad-map';
import { Toaster } from '@/components/ui/toaster';

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

export const metadata: Metadata = {
	title: 'Eyad Sharaf Almasri',
	description: 'This site contains a gallery of my works and personal skills',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
				<main className='md:snap-y md:snap-mandatory overflow-y-scroll h-screen scrollbar'>
					<Header />
					{children}
					<RouadMap />
					<Toaster />
				</main>
			</body>
		</html>
	);
}
