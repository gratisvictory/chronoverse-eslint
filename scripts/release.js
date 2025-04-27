/* eslint-disable no-console */
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const PackageUtils = {
	getAllPackages() {
		try {
			const output = execSync('bunx lerna list --all --json', { encoding: 'utf8' });
			return JSON.parse(output);
		} catch (error) {
			throw new Error('Failed to get package list', { cause: error });
		}
	},

	getChangedPackages() {
		try {
			const output = execSync('bunx lerna changed --json', { encoding: 'utf8' });
			return JSON.parse(output);
		} catch {
			console.warn('No changed packages found (perhaps already published)');
			return [];
		}
	},

	getPackageVersion(pkgPath) {
		try {
			const pkgJson = JSON.parse(readFileSync(path.join(pkgPath, 'package.json'), 'utf8'));
			return pkgJson.version;
		} catch (error) {
			throw new Error(`Failed to read package.json at ${pkgPath}`, { cause: error });
		}
	},

	normalizePackageName: name => name.replace(/^@/, '').replace(/[-/]/g, '_').toUpperCase(),
};

const OutputGenerators = {
	markdownLine: (name, version) => `- \`${name}\` → \`${version}\``,

	generateEnvScript(packages, mainPackage) {
		const lines = packages.map(pkg => `echo "${pkg.safeName}_VERSION=${pkg.version}" >> $GITHUB_ENV`);

		if (mainPackage) {
			lines.push(
				`echo "RELEASE_VERSION=${mainPackage.version}" >> $GITHUB_ENV`,
				`echo "RELEASE_NAME_SAFE=${mainPackage.safeName}" >> $GITHUB_ENV`,
			);
		}

		lines.push(
			'echo "RELEASE_PACKAGES_MARKDOWN<<EOF" >> $GITHUB_ENV',
			packages.map(pkg => OutputGenerators.markdownLine(pkg.name, pkg.version)).join('\n')
				|| '_No public packages changed_',
			'EOF',
		);

		return lines.join('\n');
	},

	generateOutputScript(packages, mainPackage) {
		const lines = packages.map(pkg => `echo "${pkg.safeName}_VERSION=${pkg.version}" >> $GITHUB_OUTPUT`);

		if (mainPackage) {
			lines.push(
				`echo "RELEASE_VERSION=${mainPackage.version}" >> $GITHUB_OUTPUT`,
				`echo "RELEASE_NAME_SAFE=${mainPackage.safeName}" >> $GITHUB_OUTPUT`,
			);
		}

		lines.push(
			'echo "RELEASE_PACKAGES_MARKDOWN<<EOF" >> $GITHUB_OUTPUT',
			packages.map(pkg => OutputGenerators.markdownLine(pkg.name, pkg.version)).join('\n')
				|| '_No public packages changed_',
			'EOF',
		);

		return lines.join('\n');
	},
};

const main = () => {
	try {
		const changedPackages = PackageUtils.getChangedPackages()
			.filter(pkg => !pkg.private)
			.map(pkg => ({
				...pkg,
				safeName: PackageUtils.normalizePackageName(pkg.name),
				version: PackageUtils.getPackageVersion(pkg.location),
			}));

		const mainPackage = changedPackages[0];
		const envScript = OutputGenerators.generateEnvScript(changedPackages, mainPackage);
		const outScript = OutputGenerators.generateOutputScript(changedPackages, mainPackage);

		console.log('--- ENV VARIABLES ---');
		console.log(envScript);
		console.log('\n--- OUTPUT VARIABLES ---');
		console.log(outScript);

		return 0;
	} catch (error) {
		console.error('Release script failed:', error.message);
		if (error.cause) console.error('Caused by:', error.cause);
		return 1;
	}
};

process.exit(main());
