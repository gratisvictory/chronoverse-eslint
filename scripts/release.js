/* eslint-disable no-console */
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const getWorkspaces = () => JSON.parse(execSync('bunx lerna list --all --json', { encoding: 'utf-8' }));

const getPackageVersion = pkgLocation => {
	const packageJsonPath = path.join(pkgLocation, 'package.json');
	const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
	return packageJson.version;
};

const generateEnvOutput = packages => {
	const lines = [];
	const outputs = [];

	packages.forEach(pkg => {
		const nameSafe = pkg.name.replace('@', '').replace('/', '_').toUpperCase();
		const version = getPackageVersion(pkg.location);

		if (pkg.private) return;

		lines.push(`echo "${nameSafe}_VERSION=${version}" >> $GITHUB_ENV`);
		outputs.push(`echo "${nameSafe}_VERSION=${version}" >> $GITHUB_OUTPUT`);
	});

	return { envScript: lines.join('\n'), outputScript: outputs.join('\n') };
};

const main = async () => {
	const packages = getWorkspaces();
	return generateEnvOutput(packages);
};

const { envScript, outputScript } = await main();
console.log(envScript);
console.log(outputScript);
