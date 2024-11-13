import React from 'react';
import ProjectDetails from '@/components/reusable-components/project-details';
import HomeImage from '@/assets/projects/guidance/home.png';
import FilesImage from '@/assets/projects/guidance/files.png';
import CourseContentImage from '@/assets/projects/guidance/course-content.png';
import CollaborationImage from '@/assets/projects/guidance/collaboration.png';
import AcadiicImage from '@/assets/projects/guidance/acadiic.png';

const Guidance = () => {
	const ImagesEmun = [
		{ image: HomeImage, alt: 'HomeImage' },
		{ image: FilesImage, alt: 'FilesImage' },
		{ image: CourseContentImage, alt: 'CourseContentImage' },
		{ image: CollaborationImage, alt: 'CollaborationImage' },
		{ image: AcadiicImage, alt: 'AcadiicImage' },
	];

	return (
		<ProjectDetails
			projectName={'Guidance'}
			projectDescription={
				'Designed to boost student engagement, this project features interactive tools like discussion forums, peer-to-peer messaging, and group collaboration spaces. It includes a flexible user role management system with customizable permissions for administrators, instructors, and students. The platform also supports a file management system and enables seamless reuse of shareable content from various e-learning platforms through SCORM packages.'
			}
			imagesEmun={ImagesEmun}
			technologies={['Vite', 'React Query', 'Redux', 'Tailwind Css', 'Shadcn', 'Firebase', 'Pusher', 'ChartJs', 'Docker']}
		/>
	);
};

export default Guidance;
