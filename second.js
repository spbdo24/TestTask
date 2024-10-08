var array = [42, 12, 18];

function calculateDiv (arr) {
	var i = 2;
	var div = null;
	var divs = [];

	while (i < 10) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] % i != 0) {
				div = null;
				break;
			} else {
				div = i;
			}
		}
		if (div !== null) divs.push(div);
		i++;
	}

	if (divs.length < 1) console.log("Общих делителей нет!");
	return divs;
}