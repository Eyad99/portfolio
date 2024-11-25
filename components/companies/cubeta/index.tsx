import React from 'react';
import CompanyDetails from '@/components/reusable-components/company-details';
import rushLogo from '@/assets/img/rush.png';
import { Project } from '@/core';

const Cubeta = () => {
	const projects: Project[] = [
		{
			logo: rushLogo.src,
			title: 'Rush',
			link: 'rush',
			url: 'https://lb-merchant.redrush.co/',
		},
	];
	return <CompanyDetails projects={projects} paginate={{ nextProjectLink: '/company/big-bang', prevProjectLink: '/company/ugaritech' }} />;
};

export default Cubeta;
