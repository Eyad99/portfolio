'use client';

import { useIntro } from '@/hooks/intro-context';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap } from 'gsap';

gsap.registerPlugin(useGSAP);

const PARTICLE_COUNT = 100;
const COLORS = ['#252A1F', '#37402E', '#566247', '#A4B092'];

interface Particle {
	x: number;
	y: number;
	radius: number;
	color: string;
	vx: number;
	vy: number;
}

export default function Intro() {
	const { introFinished, setIntroFinished } = useIntro();

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const particlesRef = useRef<Particle[]>([]);
	const introRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const canvas = canvasRef.current;
			const ctx = canvas?.getContext('2d');
			if (!canvas || !ctx) return;

			const resizeCanvas = () => {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			};

			resizeCanvas();
			window.addEventListener('resize', resizeCanvas);

			// Initialize particles
			for (let i = 0; i < PARTICLE_COUNT; i++) {
				particlesRef.current.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					radius: Math.random() * 2 + 1,
					color: COLORS[Math.floor(Math.random() * COLORS.length)],
					vx: (Math.random() - 0.5) * 2,
					vy: (Math.random() - 0.5) * 2,
				});
			}

			// Animation function for particles
			const animateParticles = () => {
				ctx.clearRect(0, 0, canvas.width, canvas.height);

				particlesRef.current.forEach((particle) => {
					particle.x += particle.vx;
					particle.y += particle.vy;

					if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
					if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

					ctx.beginPath();
					ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
					ctx.fillStyle = particle.color;
					ctx.fill();
				});

				requestAnimationFrame(animateParticles);
			};

			animateParticles();

			// Timeline animation
			const tl = gsap.timeline({
				onComplete: () => {
					gsap.to(introRef.current, {
						opacity: 0,
						duration: 1,
						ease: 'power2.inOut',
						onComplete: () => {
							setIntroFinished(true);
						},
					});
				},
			});

			tl.to(particlesRef.current, {
				duration: 2,
				x: canvas.width / 2,
				y: canvas.height / 2,
				ease: 'power3.inOut',
				stagger: {
					from: 'random',
					amount: 1,
				},
			}).to(
				particlesRef.current,
				{
					duration: 1,
					// opacity: 0,
					ease: 'power2.in',
					stagger: {
						from: 'random',
						amount: 0.5,
					},
				},
				'-=0.5'
			);

			// Cleanup
			return () => {
				window.removeEventListener('resize', resizeCanvas);
			};
		},
		{ scope: introRef }
	);

	return (
		<>
			{!introFinished && (
				<div ref={introRef} className={`fixed inset-0 bg-primary flex flex-col items-center justify-center z-50`}>
					<canvas ref={canvasRef} className='absolute inset-0' />
					<h1 className='sm:text-4xl text-3xl md:text-6xl font-bold text-white mb-4 relative z-10 text-center'>Eyad Sharaf Almasri</h1>
					<p className='sm:text-2xl text-xl relative z-10 text-center'>Software Engineer | Frontend Developer</p>
				</div>
			)}
		</>
	);
}
