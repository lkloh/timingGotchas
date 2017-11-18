var DAY_MILLISECONDS = 1000 * 60 * 60 * 24;
var WEEK_MILLISECONDS = DAY_MILLISECONDS * 7;


var regular_day = new Date('2017-11-01T02:00:00');
console.log('On daylights saving: ' + regular_day);
console.log('Before daylights saving: ' + new Date(regular_day.getTime() - DAY_MILLISECONDS));

console.log();

var after_daylights_saving_transition = new Date('2017-11-06T02:00:00');
console.log('After daylights saving: ' + after_daylights_saving_transition);
console.log('On daylights saving: ' + new Date(after_daylights_saving_transition.getTime() - DAY_MILLISECONDS));

console.log();

console.log('After daylights saving: ' + after_daylights_saving_transition);
var day_before_daylights_saving = new Date(after_daylights_saving_transition);
day_before_daylights_saving.setDate(day_before_daylights_saving.getDate() - 1);
console.log('On daylights saving: ' + day_before_daylights_saving);