var DAY_MILLISECONDS = 1000 * 60 * 60 * 24;
var WEEK_MILLISECONDS = DAY_MILLISECONDS * 7;


var daylights_saving_transition = new Date('2017-11-05T02:00:00');
console.log('Offset on daylights saving: ' + daylights_saving_transition.getTimezoneOffset());
console.log('Offset on day before daylights saving: ' + new Date(daylights_saving_transition.getTime() - DAY_MILLISECONDS).getTimezoneOffset());

console.log();

var after_daylights_saving_transition = new Date('2017-11-06T02:00:00');
console.log('Offset after daylights saving: ' + after_daylights_saving_transition.getTimezoneOffset());
console.log('Offset on daylights saving: ' + new Date(after_daylights_saving_transition.getTime() - DAY_MILLISECONDS).getTimezoneOffset());