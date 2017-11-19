
console.log( new Date(Date.UTC(2016, 11, 31, 23, 59, 60)).toUTCString() );

// December 31, 23:59:60 leap second
console.log('Last leap second: ' + new Date(Date.UTC(2016, 11, 31, 23, 59, 59) + 1000).toUTCString());
console.log(Date.UTC(2017, 0, 2, 0, 0, 0) - Date.UTC(2016, 11, 31, 0, 0, 0));

// today
console.log('Not leap second: ' + new Date(Date.UTC(2017, 11, 31, 23, 59, 59) + 1000).toUTCString());
console.log(Date.UTC(2018, 0, 2, 0, 0, 0) - Date.UTC(2017, 11, 31, 0, 0, 0));

console.log('Geek with a hat, 1999: ' + new Date(new Date("1999-01-01T00:00:00.00").getTime()-1000*60*60*24));

console.log();
oct15_2017 = new Date(new Date("2017-10-15T00:00:00.00").getTime());
console.log('Today: ' + oct15_2017);
console.log('Yesterday: ' + new Date(oct15_2017.setDate(oct15_2017.getDate()-1)));
console.log('24 hours ago: ' + new Date(new Date("2017-10-15T00:00:00.00").getTime()-1000*60*60*24));

console.log();
jan1_1999 = new Date(new Date("1999-01-01T00:00:00.00").getTime());
console.log('Today: ' + jan1_1999);
console.log('Yesterday: ' + new Date(jan1_1999.setDate(jan1_1999.getDate()-1)));
console.log('24 hours ago: ' + new Date(new Date("1999-01-01T00:00:00.00").getTime()-1000*60*60*24));



var moment = require('moment');
var dec31_1998_utc = moment.utc('1998-12-31 23:59:59', 'YYYY-MM-DD HH:mm:ss');
dec31_1998_utc.add(1, 'seconds');
console.log(dec31_1998_utc.toString());

var jan1_1999_utc = moment.utc('1999-01-01 00:00:00', 'YYYY-MM-DD HH:mm:ss');
jan1_1999_utc.subtract(24*60*60, 'seconds');
console.log(jan1_1999_utc.toString());

var jan1_1999_yesterday_utc = moment.utc('1999-01-01 00:00:00', 'YYYY-MM-DD HH:mm:ss');
jan1_1999_yesterday_utc.subtract(1, 'days');
console.log(jan1_1999_utc.toString());






