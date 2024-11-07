import React from 'react';
import ProjectDetails from '@/components/reusable-components/project-details';
import AudioDetailImage from '@/assets/projects/audio-analysis/audio-details.png';
import DashboardImage from '@/assets/projects/audio-analysis/dasboard.png';
import SpeackersImage from '@/assets/projects/audio-analysis/speackers.png';
import SignInImage from '@/assets/projects/audio-analysis/sign-in.png';
import AudioImage from '@/assets/projects/audio-analysis/audio.png';
import ChartImage from '@/assets/projects/audio-analysis/chart.png';

const VoiceAnalysis = () => {
	const ImagesEmun = [
		{ image: SignInImage, alt: 'SignInImage' },
		{ image: AudioImage, alt: 'AudioImage' },
		{ image: AudioDetailImage, alt: 'AudioDetailImage' },
		{ image: DashboardImage, alt: 'DashboardImage' },
		{ image: ChartImage, alt: 'ChartImage' },
		{ image: SpeackersImage, alt: 'SpeackersImage' },
	];

	return (
		<ProjectDetails
			projectName={'Voice Analysis'}
			projectDescription={
				'This project transforms audio files into text, analyzing conversations to distinguish between speakers and segmenting dialogue accordingly. It includes a quality assessment mechanism to evaluate call performance, generating insightful statistics for call center teams. The solution enhances call center operations by providing structured conversation breakdowns and metrics to drive improved communication and service quality'
			}
			imagesEmun={ImagesEmun}
			paginate={{ nextProjectLink: '/company/go-dev/street-league', prevProjectLink: '/company/go-dev/street-league-dashboard' }}
		/>
	);
};

export default VoiceAnalysis;
