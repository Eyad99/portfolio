import React from 'react';
import CompanyDetails from '@/components/reusable-components/company-details';
import dticLogo from '@/assets/img/dtic.png';
import { Project } from '@/core';

const BigBang = () => {
	const projects: Project[] = [
		{
			logo: dticLogo.src,
			title: 'Dtic',
			link: 'dtic',
			url: 'https://dtic.co/',
		},
	];

	return <CompanyDetails projects={projects} paginate={{ nextProjectLink: '/company/cubeta', prevProjectLink: '/company/go-dev' }} />;
};

export default BigBang;
