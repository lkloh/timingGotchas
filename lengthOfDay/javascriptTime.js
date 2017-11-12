
var DAY_MILLISECONDS = 1000 * 60 * 60 * 24;
var WEEK_MILLISECONDS = DAY_MILLISECONDS * 7;

function yesterday(current_date) {
	return new Date(current_date - DAY_MILLISECONDS);
}

function lastWeek(current_date) {
	return new Date(current_date - WEEK_MILLISECONDS);
}

var today = new Date()
console.log('Yesterday: ' + yesterday(today));
console.log('Last Week: ' + lastWeek(today));


