'use client';
import { useState, useEffect } from 'react';
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

// Particle animation utilities
const createParticle = (canvas: HTMLCanvasElement): Particle => ({
	x: Math.random() * canvas.width,
	y: Math.random() * canvas.height,
	radius: Math.random() * 2 + 1,
	color: COLORS[Math.floor(Math.random() * COLORS.length)],
	vx: (Math.random() - 0.5) * 2,
	vy: (Math.random() - 0.5) * 2,
});

const updateParticle = (particle: Particle, canvas: HTMLCanvasElement) => {
	particle.x += particle.vx;
	particle.y += particle.vy;

	if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
	if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
};

const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle) => {
	ctx.beginPath();
	ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
	ctx.fillStyle = particle.color;
	ctx.fill();
};

export default function Intro() {
	const { introFinished, setIntroFinished } = useIntro();

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const particlesRef = useRef<Particle[]>([]);
	const introRef = useRef<HTMLDivElement>(null);

	// Check localStorage when component mounts
	// useEffect(() => {
	// 	const hasSeenIntro = localStorage.getItem('hasSeenIntro');
	// 	if (hasSeenIntro) {
	// 		setIntroFinished(true);
	// 	}
	// }, [setIntroFinished]);

	const handleCompleteAnimation = () => {
		setIntroFinished(true);
		// localStorage.setItem('hasSeenIntro', 'true');
	};

	useGSAP(
		() => {
			const canvas = canvasRef.current;
			const ctx = canvas?.getContext('2d');
			if (!canvas || !ctx) return;

			// Canvas setup
			const setupCanvas = () => {
				const resizeCanvas = () => {
					canvas.width = window.innerWidth;
					canvas.height = window.innerHeight;
				};
				resizeCanvas();
				window.addEventListener('resize', resizeCanvas);
				return () => window.removeEventListener('resize', resizeCanvas);
			};

			// Initialize particles
			const initializeParticles = () => {
				for (let i = 0; i < PARTICLE_COUNT; i++) {
					particlesRef.current.push(createParticle(canvas));
				}
			};

			// Animation loop
			const animateParticles = () => {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				particlesRef.current.forEach((particle) => {
					updateParticle(particle, canvas);
					drawParticle(ctx, particle);
				});
				requestAnimationFrame(animateParticles);
			};

			// GSAP Animation
			const createIntroAnimation = () => {
				const tl = gsap.timeline({
					onComplete: () => {
						gsap.to(introRef.current, {
							opacity: 0,
							duration: 1,
							ease: 'power2.inOut',
							onComplete: () => handleCompleteAnimation(),
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
						ease: 'power2.in',
						stagger: {
							from: 'random',
							amount: 0.5,
						},
					},
					'-=0.5'
				);
			};

			// Initialize everything
			const cleanup = setupCanvas();
			initializeParticles();
			animateParticles();
			createIntroAnimation();

			return cleanup;
		},
		{ scope: introRef }
	);

	return (
		<>
			{!introFinished && (
				<div ref={introRef} className='fixed inset-0 bg-primary flex flex-col items-center justify-center z-50'>
					<canvas ref={canvasRef} className='absolute inset-0' />
					<h1 className='sm:text-4xl text-3xl md:text-6xl font-bold text-white mb-4 relative z-10 text-center'>Eyad Sharaf Almasri</h1>
					<p className='sm:text-2xl text-xl relative z-10 text-center'>Senior Frontend Developer</p>
				</div>
			)}
		</>
	);
}
