
import { useState, useEffect } from 'react';

export function useWindowWidth() {
	const [windowWidth, setWindowWidth] = useState(
		typeof window !== 'undefined' ? window.innerWidth : 0
	);
	console.log('window.innerWidth',window.innerWidth)
	useEffect(() => {
		if (typeof window === 'undefined') return; // Ensure window is defined

		// Function to update window width
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}

		// Attach event listener
		 window.addEventListener('resize', handleResize);

		// Cleanup the event listener on component unmount
		return () => {
			 window.removeEventListener('resize', handleResize);
		};
	}, []); 

	return windowWidth;
}
