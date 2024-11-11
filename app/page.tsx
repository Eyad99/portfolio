import Intro from '@/components/sections/intro';
import MySkills from '@/components/sections/my-skills';
import MyWorks from '@/components/sections/my-works';
import Panner from '@/components/sections/panner';
import SendMessage from '@/components/sections/send-message';
import Footer from '@/components/widgets/footer';
import { Fragment } from 'react';

export default function Home() {
	return (
		<Fragment>
			<Intro />

			<section id='main'>
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
		</Fragment>
	);
}
