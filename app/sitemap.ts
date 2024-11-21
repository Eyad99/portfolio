import fs from 'fs';
import { MetadataRoute } from 'next';
import path from 'path';

const baseUrl = 'http:localhost:3000';
const baseDir = 'app';
const excludeDirs = ['fonts', 'company'];

export const revaidate = 3600;

async function getCompaniesRoutes(): Promise<string[]> {
	const companies = [
		{
			name: 'go-dev',
			projects: [{ name: 'street-league' }, { name: 'street-league-dashboard' }, { name: 'audio-analysis' }],
		},
		{
			name: 'ugaritech',
			projects: [{ name: 'guidance' }],
		},
		{
			name: 'cubeta',
			projects: [{ name: 'rush' }],
		},
		{
			name: 'big-bang',
			projects: [{ name: 'dtic' }],
		},
	];

	const routes: string[] = [];

	companies.forEach((company) => {
		routes.push(`/company/${company.name}`);

		company.projects.forEach((project) => {
			routes.push(`/company/${company.name}/${project.name}`);
		});
	});

	return routes;
}

async function getRoutes(): Promise<MetadataRoute.Sitemap> {
	const fullPath = path.join(process.cwd(), baseDir);
	const entries = fs.readdirSync(fullPath, { withFileTypes: true });
	const routes: string[] = ['/'];

	entries.forEach((entry) => {
		if (entry.isDirectory() && !excludeDirs.includes(entry.name)) {
			routes.push(`/${entry.name}`);
		}
	});

	// Add dynamic routes
	const companiesRoutes = await getCompaniesRoutes();
	const allRoutes = [...routes, ...companiesRoutes];

	return allRoutes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString(),
		changeFrequency: 'weekly',
		priority: 1.0,
	}));
}

export default function siteMap() {
	return getRoutes();
}
