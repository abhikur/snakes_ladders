function invalidNumber(number) {
	return isNaN(number) || +number < 1 || +number > 6;
}

module.exports = invalidNumber;