import React from 'react';
import ProjectDetails from '@/components/reusable-components/project-details';
import CustomProductImage from '@/assets/projects/street-league/custom-product.png';
import FilterProductImage from '@/assets/projects/street-league/filter-product.png';
import SingeProductImage from '@/assets/projects/street-league/single-product.png';
import StudiomImage from '@/assets/projects/street-league/studiom.png';
import MyTeamImage from '@/assets/projects/street-league/my-team.png';
import MainImage from '@/assets/projects/street-league/main.png';

const StreetLeague = () => {
	const imagesEnum = [
		{ image: MainImage, alt: 'MainImage' },
		{ image: MyTeamImage, alt: 'MyTeamImage' },
		{ image: SingeProductImage, alt: 'SingeProductImage' },
		{ image: FilterProductImage, alt: 'FilterProductImage' },
		{ image: CustomProductImage, alt: 'CustomProductImage' },
		{ image: StudiomImage, alt: 'StudiomImage' },
	];

	return (
		<ProjectDetails
			projectName={'StreetLeague'}
			projectDescription={
				'Street League is a platform centered around competitive sports leagues and events. It offers a space for teams and players to engage in various sports competitions. The site provides registration options, event details, and access to their shop for sports	gear and accessories. Additionally, users can follow updates and connect with the community through the platform. It also offers downloadable apps for easy access to schedules, results, and other relevant information. For more details,you can visit '
			}
			imagesEnum={imagesEnum}
			website={{ link: 'https://streetleague.ae/', name: "Street League's website" }}
			paginate={{
				nextProjectLink: '/company/go-dev/street-league-dashboard',
				prevProjectLink: '/company/go-dev/audio-analysis',
				backLink: '/company/go-dev',
			}}
			technologies={['NextJs', 'React Query', 'Mui', 'Firebase', 'Pusher', 'Stripe', 'Tabby']}
		/>
	);
};

export default StreetLeague;
