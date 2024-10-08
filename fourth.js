const data = {
	number: 5
};

data.calc = function() {
	var string = "  ";

	for (let k = 1; k < this.number+1; k++) {
		string = string + k + " ";
	}
	console.log(string);

	for (let i = 1; i < this.number+1; i++) {
		string = i + " ";
		for (let j = 1; j < this.number+1; j++) {
			string = string + i*j + " ";
		}
		console.log(string);
	}
}

data.calc();