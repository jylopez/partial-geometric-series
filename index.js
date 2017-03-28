module.exports = function (ratio, nth) {
	if (ratio >= 1) { console.warn('Warning: ratio must be less than 1 for series to converge'); }
	var sum = 0;
	for (var n = 0; n < (nth + 1); n++){
		sum += Math.pow(ratio, n);
	}
	return sum;
}
