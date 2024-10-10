function findDifference(a, b) {
	let answerA = a.reduce((curr,next) => curr * next)
	let answerB = b.reduce((curr,next) => curr * next)

	return Math.abs(answerB - answerA);

}
