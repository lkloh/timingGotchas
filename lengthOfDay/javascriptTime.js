
var DAY_MILLISECONDS = 1000 * 60 * 60 * 24;
var WEEK_MILLISECONDS = DAY_MILLISECONDS * 7;

function yesterday(current_date) {
	return new Date(current_date - DAY_MILLISECONDS);
}

function lastWeek(current_date) {
	return new Date(current_date - WEEK_MILLISECONDS);
}

function whatHappensNow() {
	console.log(`\nWhat happens now`);
	var today = new Date();
	console.log(`Current time: ${today}`);
	console.log(`Yesterday: ${yesterday(today)}`);
	console.log(`Last Week: ${lastWeek(today)}`);
	console.log(`\n`);
}

function onDaylightsSavingTransition() {
	console.log(`\nWhat happens on daylights saving`);
	var today = new Date('2017-11-05T02:00:00');
	console.log(`Current time: ${today}`);
	console.log(`Yesterday: ${yesterday(today)}`);
	console.log(`Last Week: ${lastWeek(today)}`);
	console.log(`\n`);
}

function justBeforeDaylightsSavingTransition() {
	console.log(`\nWhat happens just before daylights saving`);
	var today = new Date('2017-11-05T01:59:00');
	console.log(`Current time: ${today}`);
	console.log(`Yesterday: ${yesterday(today)}`);
	console.log(`Last Week: ${lastWeek(today)}`);
	console.log(`\n`);
}

whatHappensNow();
onDaylightsSavingTransition();
justBeforeDaylightsSavingTransition();

