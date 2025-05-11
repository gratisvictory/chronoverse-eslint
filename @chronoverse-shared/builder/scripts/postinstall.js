import { chmodSync, existsSync } from 'node:fs';

const cliPath = './dist/cli.js';

if (existsSync(cliPath)) {
	chmodSync(cliPath, 0o755);
	console.log('Made cli.js executable.');
} else {
	console.log('dist/cli.js not found, skipping chmod.');
}
