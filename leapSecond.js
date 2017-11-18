
console.log( new Date(Date.UTC(2016, 11, 31, 23, 59, 60)).toUTCString() );

// December 31, 23:59:60 leap second
console.log('Last leap second: ' + new Date(Date.UTC(2016, 11, 31, 23, 59, 59) + 1000).toUTCString());
console.log(Date.UTC(2017, 0, 2, 0, 0, 0) - Date.UTC(2016, 11, 31, 0, 0, 0));

// today
console.log('Not leap second: ' + new Date(Date.UTC(2017, 11, 31, 23, 59, 59) + 1000).toUTCString());
console.log(Date.UTC(2018, 0, 2, 0, 0, 0) - Date.UTC(2017, 11, 31, 0, 0, 0));

console.log('Geek with a hat: ' + new Date(new Date("1999-01-01T00:00:00.00").getTime()-1000*60*60*24));