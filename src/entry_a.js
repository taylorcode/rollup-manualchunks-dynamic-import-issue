import {USED_BY_A} from './used_by_a.js';

console.log(USED_BY_A);

import('./dynamic_used_by_a').then(({DYNAMIC_USED_BY_A}) => {
	console.log(DYNAMIC_USED_BY_A);
});

import('./dynamic_used_by_both').then(({DYNAMIC_USED_BY_BOTH}) => {
	console.log(DYNAMIC_USED_BY_BOTH);
});
