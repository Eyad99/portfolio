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
			{/* <Intro /> */}
			<section>
				{/* <div className='md:snap-always md:snap-center' id='panner'>
					<Panner />
				</div> */}

				{/* <div className='md:snap-always md:snap-center' id='skills'>
					<MySkills />
				</div>
*/}
				<div className='md:snap-always md:snap-center' id='works'>
					<MyWorks />
				</div>

				<div className='md:snap-always md:snap-center' id='contact'>
					<SendMessage />
				</div>

				<div className='md:snap-always md:snap-center' id='footer'>
					<Footer />
				</div>
			</section>
		</IntroProvider>
	);
}
