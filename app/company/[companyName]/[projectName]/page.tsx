'use client';

import Dtic from '@/components/companies/big-bang/dtic';
import Rush from '@/components/companies/cubeta/rush';
import StreetLeague from '@/components/companies/go-dev/street-league';
import StreetLeagueDashboard from '@/components/companies/go-dev/street-league-dashboard';
import VoiceAnalysis from '@/components/companies/go-dev/voice-analysis';
import Guidance from '@/components/companies/ugaritech/guidance';
import Footer from '@/components/widgets/footer';
import { useParams } from 'next/navigation';
import React from 'react';

const ProjectName = () => {
	const { projectName } = useParams();

	const renderProjectComponent = (copanyName: string | string[]) => {
		switch (copanyName) {
			case 'street-league':
				return <StreetLeague />;
			case 'street-league-dashboard':
				return <StreetLeagueDashboard />;
			case 'audio-analysis':
				return <VoiceAnalysis />;
			case 'guidance':
				return <Guidance />;
			case 'rush':
				return <Rush />;
			case 'dtic':
				return <Dtic />;

			default:
				break;
		}
	};

	return (
		<div>
			{renderProjectComponent(projectName)}
			<Footer />
		</div>
	);
};

export default ProjectName;
