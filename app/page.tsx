const MySkills = dynamic(() => import('@/components/sections/my-skills'), { ssr: false });
import SendMessage from '@/components/sections/send-message';
import MyWorks from '@/components/sections/my-works';
import Panner from '@/components/sections/panner';
import Footer from '@/components/widgets/footer';
import dynamic from 'next/dynamic';
import Intro from '@/components/sections/intro';
import { IntroProvider } from '@/hooks/intro-context';

export default function Home() {
	return (
		<IntroProvider>
			<Intro />
			<section>
				<div className='snap-always snap-center'>
					<Panner />
				</div>

				<div className='snap-always snap-center'>
					<MySkills />
				</div>

				<div className='snap-always snap-center'>
					<MyWorks />
				</div>

				<div className='snap-always snap-center'>
					<SendMessage />
				</div>

				<div className='snap-always snap-center'>
					<Footer />
				</div>
			</section>
		</IntroProvider>
	);
}
