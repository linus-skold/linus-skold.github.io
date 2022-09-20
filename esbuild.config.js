import esbuild from 'esbuild';
import process from 'node:process';
import eslint from 'esbuild-plugin-eslint';
import esbuildCopyStaticFiles from 'esbuild-copy-static-files';

const defaultDefine = {
	entryPoints: ['./src/client/index.js'],
	bundle: true,
	minify: process.env.process === 'production',
	outfile: './public/bundle.js',
	loader: { '.js': 'jsx' },
	plugins:[
		eslint(),
		esbuildCopyStaticFiles({ src: './src/client/static', dest: 'public/static' })
	],
	external: [ '*.png']
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
