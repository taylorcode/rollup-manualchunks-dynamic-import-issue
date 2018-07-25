export default [
	{
		input: ['src/entry_a.js', 'src/entry_b.js'],
		output: {
			dir: 'dist',
			format: 'es',
		},
		experimentalCodeSplitting: true,
		optimizeChunks: true,
		manualChunks: {
			dynamic_imports: [
				//'src/used_by_a.js', // uncomment this and it will work!
				'src/dynamic_used_by_a.js',
				'src/dynamic_used_by_both.js',
			],
		},
	},
];
