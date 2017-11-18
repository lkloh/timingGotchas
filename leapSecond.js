

// December 31, 23:59:60 leap second
var leapSecond = new Date(Date.UTC(2016, 12, 31, 23, 59, 60)); 
console.log('Last leap second: ' + leapSecond);

// today
var notLeapSecond = new Date(Date.UTC(2017, 12, 31, 23, 59, 60));
console.log(notLeapSecond);


