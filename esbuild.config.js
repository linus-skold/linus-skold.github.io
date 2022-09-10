import esbuild from 'esbuild';
import process from 'node:process';
import eslint from 'esbuild-plugin-eslint';

const defaultDefine = {
	entryPoints: ['./src/client/index.js'],
	bundle: true,
	minify: process.env.process === 'production',
	outfile: './public/js/bundle.js',
	loader: { '.js': 'jsx' },
	plugins:[
		eslint()
	]
};

const prodDefine = {
	...defaultDefine,
	define: {
		'process.env.NODE_ENV': '"production"',
	},
};

const devDefine = {
	...defaultDefine,
	define: {
		'process.env.NODE_ENV': '"development"',
	},
};

const args = process.argv.slice(2);

esbuild
	.build(args.includes('production') ? prodDefine : devDefine)
	.catch(() => {
		throw 'Failed to build';
	});
