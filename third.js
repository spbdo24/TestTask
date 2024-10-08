function findNumbers(min, max) {
	var reply = [];

	let divs;
	for (let i = min; i <= max; i++) {
		divs = [];
		for (let j = 1; j < max; j++) {
			if (i % j == 0) {
				divs.push(j);
			}
		}
		if (divs.length == 2) reply.push(i);
	}
	return reply;
}