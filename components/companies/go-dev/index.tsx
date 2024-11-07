import React from 'react';
import streetLeagueLDashboardogo from '@/assets/img/streetleague1.png';
import streetLeagueLogo from '@/assets/img/streetleague.png';
import CompanyDetails from '@/components/reusable-components/company-details';
import insihtsLogo from '@/assets/img/insights.png';
import { Project } from '@/core';

const Godev = () => {
	const projects: Project[] = [
		{
			logo: streetLeagueLogo.src,
			title: 'Street League',
			link: 'street-league',
			url: 'https://streetleague.ae/',
		},
		{
			logo: streetLeagueLDashboardogo.src,
			title: 'Street League Dashboard',
			link: 'street-league-dashboard',
			url: 'https://control-panel.streetleague.ae/',
		},
		{
			logo: insihtsLogo.src,
			title: 'Audio Analysis',
			link: 'audio-analysis',
			url: 'https://insights-me.ai/',
		},
	];

	return <CompanyDetails projects={projects} paginate={{ nextProjectLink: '/company/ugaritech', prevProjectLink: '/company/big-bang' }} />;
};

export default Godev;
