
var DAY_MILLISECONDS = 1000 * 60 * 60 * 24;
var WEEK_MILLISECONDS = DAY_MILLISECONDS * 7;

function yesterday(current_date) {
	return new Date(current_date.getTime() - DAY_MILLISECONDS);
}

function lastWeek(current_date) {
	return new Date(current_date.getTime() - WEEK_MILLISECONDS);
}

function usingBuggyFunctions(d) {
	console.log('\n');
	console.log(`Current time: ${d}`);
	console.log(`Yesterday: ${yesterday(d)}`);
	console.log(`Last Week: ${lastWeek(d)}`);
}

function usingJavascriptFunctions(d) {
	console.log('\n');

	console.log(`Current time: ${d}`);

	var yesterday = new Date(d.getTime());
	yesterday.setDate(d.getDate() - 1);
	console.log(`Yesterday: ${yesterday}`);

	var lastWeek = new Date(d.getTime());
	lastWeek.setDate(d.getDate() - 7);
	console.log(`Last Week: ${lastWeek}`);
}



function whatHappensNow() {
	console.log(`\n ======== What happens now ========`);
	var today = new Date();
	usingBuggyFunctions(today);
	usingJavascriptFunctions(today);
	console.log(`\n ======== What happens now ========`);
}

function onDaylightsSavingTransition() {
	console.log(`\n ======== What happens on daylights saving ========`);
	var today = new Date('2017-11-05T02:00:00');
	usingBuggyFunctions(today);
	usingJavascriptFunctions(today);
	console.log(`\n ======== What happens on daylights saving ========`);
}

function justBeforeDaylightsSavingTransition() {
	console.log(`\n ======== What happens before daylights saving ========`);
	var today = new Date('2017-11-05T00:00:00');
	usingBuggyFunctions(today);
	usingJavascriptFunctions(today);
	console.log(`\n ======== What happens before daylights saving ========`);
}

whatHappensNow();
onDaylightsSavingTransition();
justBeforeDaylightsSavingTransition();

