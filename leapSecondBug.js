// Leap seconds ignored: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

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

/*
 * Output of running this script in San Francisco, CA on Nov 18, 2017
 * Geek with a hat, 1999: Wed Dec 30 1998 16:00:00 GMT-0800 (PST)
 * 
 * Today: Sat Oct 14 2017 17:00:00 GMT-0700 (PDT)
 * Yesterday: Fri Oct 13 2017 17:00:00 GMT-0700 (PDT)
 * 24 hours ago: Fri Oct 13 2017 17:00:00 GMT-0700 (PDT)
 * 
 * Today: Thu Dec 31 1998 16:00:00 GMT-0800 (PST)
 * Yesterday: Wed Dec 30 1998 16:00:00 GMT-0800 (PST)
 * 24 hours ago: Wed Dec 30 1998 16:00:00 GMT-0800 (PST)
 */
