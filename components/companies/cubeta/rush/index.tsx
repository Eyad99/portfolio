import React from 'react';
import ProjectDetails from '@/components/reusable-components/project-details';
import OrderDetailsImage from '@/assets/projects/rush/order-details.png';
import DashboardImage from '@/assets/projects/rush/dashboard.png';
import PaymentImage from '@/assets/projects/rush/payment.png';
import SignInImage from '@/assets/projects/rush/sign-in.png';
import DriverImage from '@/assets/projects/rush/driver.png';
import OrderImage from '@/assets/projects/rush/order.png';
import MapImage from '@/assets/projects/rush/map.png';

const Rush = () => {
	const imagesEnum = [
		{ image: SignInImage, alt: 'SignInImage' },
		{ image: DashboardImage, alt: 'DashboardImage' },
		{ image: MapImage, alt: 'MapImage' },
		{ image: DriverImage, alt: 'DriverImage' },
		{ image: OrderImage, alt: 'OrderImage' },
		{ image: OrderDetailsImage, alt: 'OrderDetailsImage' },
		{ image: PaymentImage, alt: 'PaymentImage' },
	];
	return (
		<ProjectDetails
			projectName={'Rush'}
			projectDescription={
				'This software system provides a convenient on-demand delivery service with door-to-door and package delivery options. It offers features such as restaurant reservations, coupons, and discounts to enhance user convenience. Users can benefit from a built-in loyalty program with gamified rewards, manage their account balances, and access a digital wallet. The system also integrates a Delivery Management System (DMS) to streamline the ordering and delivery processes effectively.'
			}
			imagesEnum={imagesEnum}
			website={{ link: 'https://lb-merchant.redrush.co/', name: 'Rush website' }}
			paginate={{
				backLink: '/company/cubeta',
			}}
			technologies={['NextJs', 'Redux Toolkit', 'Ant Design']}
		/>
	);
};

export default Rush;
