
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