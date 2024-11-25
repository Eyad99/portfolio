'use client';

import React from 'react';
import Ugaritech from '@/components/companies/ugaritech';
import BigBang from '@/components/companies/big-bang';
import Cubeta from '@/components/companies/cubeta';
import Godev from '@/components/companies/go-dev';
import { useParams } from 'next/navigation';
import Footer from '@/components/widgets/footer';

const CompanyName = () => {
	const { companyName } = useParams();

	const renderCompanyComponent = (copanyName: string | string[]) => {
		switch (copanyName) {
			case 'go-dev':
				return <Godev />;
			case 'ugaritech':
				return <Ugaritech />;
			case 'cubeta':
				return <Cubeta />;
			case 'big-bang':
				return <BigBang />;

			default:
				break;
		}
	};

	return (
		<div>
			{renderCompanyComponent(companyName)}
			<Footer />
		</div>
	);
};

export default CompanyName;
