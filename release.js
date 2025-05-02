// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable no-console */
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const PackageUtilities = {
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

	getPackageVersion(packagePath) {
		try {
			const packageJson = JSON.parse(readFileSync(path.join(packagePath, 'package.json'), 'utf8'));
			return packageJson.version;
		} catch (error) {
			throw new Error(`Failed to read package.json at ${packagePath}`, { cause: error });
		}
	},

	normalizePackageName: name => name.replace(/^@/, '').replaceAll(/[-/]/g, '_').toUpperCase(),
};

const OutputGenerators = {
	markdownLine: (name, version) => `- \`${name}\` → \`${version}\``,

	generateEnvScript(packages, mainPackage) {
		const lines = packages.map(
			package_ => `echo "${package_.safeName}_VERSION=${package_.version}" >> $GITHUB_ENV`,
		);

		if (mainPackage) {
			lines.push(
				`echo "RELEASE_VERSION=${mainPackage.version}" >> $GITHUB_ENV`,
				`echo "RELEASE_NAME_SAFE=${mainPackage.safeName}" >> $GITHUB_ENV`,
			);
		}

		lines.push(
			'echo "RELEASE_PACKAGES_MARKDOWN<<EOF" >> $GITHUB_ENV',
			packages.map(package_ => OutputGenerators.markdownLine(package_.name, package_.version)).join('\n')
				|| '_No public packages changed_',
			'EOF',
		);

		return lines.join('\n');
	},

	generateOutputScript(packages, mainPackage) {
		const lines = packages.map(
			package_ => `echo "${package_.safeName}_VERSION=${package_.version}" >> $GITHUB_OUTPUT`,
		);

		if (mainPackage) {
			lines.push(
				`echo "RELEASE_VERSION=${mainPackage.version}" >> $GITHUB_OUTPUT`,
				`echo "RELEASE_NAME_SAFE=${mainPackage.safeName}" >> $GITHUB_OUTPUT`,
			);
		}

		lines.push(
			'echo "RELEASE_PACKAGES_MARKDOWN<<EOF" >> $GITHUB_OUTPUT',
			packages.map(package_ => OutputGenerators.markdownLine(package_.name, package_.version)).join('\n')
				|| '_No public packages changed_',
			'EOF',
		);

		return lines.join('\n');
	},
};

const main = () => {
	try {
		const changedPackages = PackageUtilities.getChangedPackages()
			.filter(package_ => !package_.private)
			.map(package_ => ({
				...package_,
				safeName: PackageUtilities.normalizePackageName(package_.name),
				version: PackageUtilities.getPackageVersion(package_.location),
			}));

		const mainPackage = changedPackages[0];
		const environmentScript = OutputGenerators.generateEnvScript(changedPackages, mainPackage);
		const outScript = OutputGenerators.generateOutputScript(changedPackages, mainPackage);

		console.log('--- ENV VARIABLES ---');
		console.log(environmentScript);
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
