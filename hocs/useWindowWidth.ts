import { useState, useEffect } from "react";

export function useWindowWidth() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		// Function to update window width
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}

		// Attach event listener
		window.addEventListener("resize", handleResize);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []); // Empty dependency array ensures that effect runs only once on mount

	return windowWidth;
}
