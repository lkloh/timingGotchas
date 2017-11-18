
console.log( new Date(Date.UTC(2016, 11, 31, 23, 59, 59)).toUTCString() );

// December 31, 23:59:60 leap second
console.log('Last leap second: ' + new Date(Date.UTC(2016, 11, 31, 23, 59, 59) + 1000).toUTCString());

// today
console.log('Not leap second: ' + new Date(Date.UTC(2017, 11, 31, 23, 59, 59) + 1000).toUTCString());


