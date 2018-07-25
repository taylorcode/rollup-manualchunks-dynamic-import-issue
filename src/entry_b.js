import {USED_BY_B} from './used_by_b.js';

console.log(USED_BY_B);

import('./dynamic_used_by_a').then(({DYNAMIC_USED_BY_A}) => {
	console.log(DYNAMIC_USED_BY_A);
});
