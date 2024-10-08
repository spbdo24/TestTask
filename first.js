function word(variable) {
	var reply, lastDigit;
	if (variable.toString().length > 1) lastDigit = variable.toString().substr(-1);
	else lastDigit = variable;

	if ((variable > 9) && (variable < 20)) {
	reply = variable + " компьютеров";
	} else {
		switch (Number(lastDigit)) {
			case 0: case 5: case 6: case 7: case 8: case 9:
				reply = variable + " компьютеров";
				break;
			case 1:
				reply = variable + " компьютер";
				break;
			case 2: case 3: case 4:
				reply = variable + " компьютера";
				break;
		}
	}
	return reply;
}