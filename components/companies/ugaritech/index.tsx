import React from 'react';
import CompanyDetails from '@/components/reusable-components/company-details';
import guidanceLogo from '@/assets/img/guidance.png';
import { Project } from '@/core';

const Ugaritech = () => {
	const projects: Project[] = [
		{
			logo: guidanceLogo.src,
			title: 'Guidance',
			link: 'guidance',
		},
	];

	return <CompanyDetails projects={projects} paginate={{ nextProjectLink: '/company/cubeta', prevProjectLink: '/company/go-dev' }} />;
};

export default Ugaritech;
