import ProjectDetails from '@/components/reusable-components/project-details';
import React from 'react';

const Dtic = () => {
	return (
		<ProjectDetails
			projectName={'Dtic'}
			projectDescription={
				'This single-vendor e-commerce platform provides a streamlined solution for order management and product display, creating a unique and dynamic online shopping experience.'
			}
			imagesEmun={[]}
			website={{ link: 'https://dtic.co/', name: 'Dtic website' }}
		/>
	);
};

export default Dtic;
