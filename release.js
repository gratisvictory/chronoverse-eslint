// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable no-console */
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

/**
 * @typedef {object} Package
 * @property {string} name - Package name
 * @property {string} version - Package version
 * @property {string} location - Package location
 * @property {boolean} private - Whether the package is private
 * @property {string} safeName - Normalized package name
 */

/**
 * @typedef {object} MainPackage
 * @property {string} name - Package name
 * @property {string} version - Package version
 * @property {string} safeName - Normalized package name
 */

const PackageUtilities = {
	/**
	 * Retrieves all packages in the monorepo
	 * @returns {Package[]} Array of all packages
	 */
	getAllPackages() {
		try {
			const output = execSync('bunx lerna list --all --json', { encoding: 'utf8' });
			return JSON.parse(output);
		} catch (error) {
			console.error('Failed to get package list:', error);
			return [];
		}
	},

	/**
	 * Retrieves changed packages in the monorepo
	 * @returns {Package[]} Array of changed packages
	 */
	getChangedPackages() {
		try {
			const output = execSync('bunx lerna changed --json', { encoding: 'utf8' });
			return JSON.parse(output);
		} catch {
			console.warn('No changed packages found (perhaps already published)');
			return [];
		}
	},

	/**
	 * Gets version from package.json
	 * @param {string} packagePath - Path to package directory
	 * @returns {string} Package version
	 */
	getPackageVersion(packagePath) {
		try {
			// eslint-disable-next-line security/detect-non-literal-fs-filename
			const packageJson = JSON.parse(readFileSync(path.join(packagePath, 'package.json'), 'utf8'));
			return packageJson.version;
		} catch (error) {
			console.error(`Failed to read package.json at ${packagePath}:`, error);
			return '0.0.0';
		}
	},

	/**
	 * Normalizes package name for environment variables
	 * @param {string} name - Package name
	 * @returns {string} Normalized package name
	 */
	normalizePackageName(name) {
		return name.replace(/^@/, '').replaceAll(/[-/]/g, '_').toUpperCase();
	},
};

const OutputGenerators = {
	/**
	 * Generates markdown line for package version
	 * @param {string} name - Package name
	 * @param {string} version - Package version
	 * @returns {string} Markdown formatted line
	 */
	markdownLine(name, version) {
		return `- \`${name}\` → \`${version}\``;
	},

	/**
	 * Generates environment script for GitHub Actions
	 * @param {Package[]} packages - Array of packages to release
	 * @param {MainPackage | null} mainPackage - Main package info
	 * @returns {string} Environment script
	 */
	generateEnvScript(packages, mainPackage) {
		const packageLines = packages.map(
			package_ => `echo "${package_.safeName}_VERSION=${package_.version}" >> $GITHUB_ENV`,
		);

		const mainPackageLines =
			mainPackage ?
				[
					`echo "RELEASE_VERSION=${mainPackage.version}" >> $GITHUB_ENV`,
					`echo "RELEASE_NAME_SAFE=${mainPackage.safeName}" >> $GITHUB_ENV`,
				]
			:	[];

		const markdownLines = [
			'echo "RELEASE_PACKAGES_MARKDOWN<<EOF" >> $GITHUB_ENV',
			packages.map(package_ => OutputGenerators.markdownLine(package_.name, package_.version)).join('\n')
				|| '_No public packages changed_',
			'EOF',
		];

		return [
			...packageLines,
			...mainPackageLines,
			...markdownLines,
		].join('\n');
	},

	/**
	 * Generates output script for GitHub Actions
	 * @param {Package[]} packages - Array of packages to release
	 * @param {MainPackage | null} mainPackage - Main package info
	 * @returns {string} Output script
	 */
	generateOutputScript(packages, mainPackage) {
		const packageLines = packages.map(
			package_ => `echo "${package_.safeName}_VERSION=${package_.version}" >> $GITHUB_OUTPUT`,
		);

		const mainPackageLines =
			mainPackage ?
				[
					`echo "RELEASE_VERSION=${mainPackage.version}" >> $GITHUB_OUTPUT`,
					`echo "RELEASE_NAME_SAFE=${mainPackage.safeName}" >> $GITHUB_OUTPUT`,
				]
			:	[];

		const markdownLines = [
			'echo "RELEASE_PACKAGES_MARKDOWN<<EOF" >> $GITHUB_OUTPUT',
			packages.map(package_ => OutputGenerators.markdownLine(package_.name, package_.version)).join('\n')
				|| '_No public packages changed_',
			'EOF',
		];

		return [
			...packageLines,
			...mainPackageLines,
			...markdownLines,
		].join('\n');
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

		const mainPackage =
			changedPackages[0] ?
				{
					name: changedPackages[0].name,
					safeName: changedPackages[0].safeName,
					version: changedPackages[0].version,
				}
			:	null;

		const environmentScript = OutputGenerators.generateEnvScript(changedPackages, mainPackage);
		const outScript = OutputGenerators.generateOutputScript(changedPackages, mainPackage);

		console.log('--- ENV VARIABLES ---');
		console.log(environmentScript);
		console.log('\n--- OUTPUT VARIABLES ---');
		console.log(outScript);

		return 0;
	} catch (error) {
		if (error instanceof Error) {
			console.error('Release script failed:', error.message);
			if (error.cause) console.error('Caused by:', error.cause);
		} else {
			console.error('Release script failed with unknown error');
		}
		return 1;
	}
};

// eslint-disable-next-line unicorn-x/no-process-exit
process.exit(main());
